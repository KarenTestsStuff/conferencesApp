import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import json from 'morgan-json'
import path from 'path'
import rfs from 'rotating-file-stream'
import generateSafeId from 'generate-safe-id'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'

export default (apiRoot, routes) => {
  const app = express();
  const logDirectory = path.join(__dirname, 'logs');
  const eventLookup = require('./eventLookup');
  const apiMetrics = require('prometheus-api-metrics');
  const accessLogStream = rfs('access.log', {
    interval: '5d',
    path: logDirectory
  });

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors())
    app.use(compression())
  }

  morgan.token('id', function getId() {
    return generateSafeId();
  });

  morgan.token('eventName', function getEventName(req, res){
    return eventLookup.setEventName(req.originalUrl, req.method, res.statusCode)
  });

  const format = json({
    event: ':eventName',
    short: ':id :method :url :status',
    length: ':res[content-length]',
    responseTime: ':response-time ms'
  });

  app.use(morgan(format, {stream: accessLogStream}));
  app.use(morgan(format));

  app.use(apiMetrics({
    metricsPrefix: 'api_metrics',
    durationBuckets: [0.001, 0.005, 0.015, 0.1, 0.2, 0.5],
    requestSizeBuckets: [5, 10, 25, 50, 100, 500, 1000, 5000, 10000],
    responseSizeBuckets: [5, 10, 25, 50, 100, 500, 1000, 5000, 10000]
  }));

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
