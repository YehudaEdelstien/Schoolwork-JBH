const express = require('express')

const {getFile} = require('./filesHandler');

const router = express.Router()

router.get('/*', async (req, res) => {
    try{
        res.send(await getFile(req.path));
    }
    catch(err) {
        if (err.code === 'ENOENT'){
            res.status(404).send('Not Found');
            return;
        }
        console.log(err)
    }
})

router.post('/rename')

module.exports = router;