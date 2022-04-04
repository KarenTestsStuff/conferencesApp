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

  const format = json({
    short: ':id :method :url :status',
    length: ':res[content-length]',
    responseTime: ':response-time ms'
  });

  app.use(morgan(format, {stream: accessLogStream}));
  app.use(morgan(format));


  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)
  app.use(queryErrorHandler())
  app.use(bodyErrorHandler())

  return app
}
