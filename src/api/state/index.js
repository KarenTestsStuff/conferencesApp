import {Router} from 'express'
import {Speaker} from '../speaker'

const router = new Router();

router.get('/:action?', async function(req, res){
    if(req.query.action === 'speakers'){
        let count = await Speaker.count({}, function(err){});
        let distinct = await Speaker.distinct('name', function(err){});
        res.status(200).json({
            "numberOfSpeakers": count,
            "distinctSpeakers": distinct
        });
    }
})

export default router