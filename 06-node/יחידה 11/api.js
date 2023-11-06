const express = require('express')
const path = require('path');

const {filesHandler} = require('./filesHandler');

const router = express.Router()

router.get('/*', async (req, res) => {
    try{
        const extension = path.extname(req.path);
    
        if (extension === '') {
            res.send(await filesHandler.listFiles(req.path));
        } else if (extension === '.txt') {
            res.send(await filesHandler.getFileText(req.path));
        }
    }
    catch(err) {
        if (err.code === 'ENOENT'){
            res.status(404).send('Not Found');
            return;
        }
        console.log(err)
    }
})

module.exports = router;