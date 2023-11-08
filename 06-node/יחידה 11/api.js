const express = require('express')

const { getFile, renameFile, copyFile, deleteFile } = require('./filesHandler');

const router = express.Router()

router.get('/*', async (req, res) => {
    try {
        res.send(await getFile(req.path));
    } catch (err) {
        handleError(err, res)
    }
})

router.post('/*', async (req, res) => {
    try {
        let folderPath
        switch (req.body.request) {
            case 'rename':
                folderPath = (await renameFile(req.path, req.body.data)).folderPath;
                res.send(await getFile(folderPath));
                break;
            case 'copy':
                folderPath = (await copyFile(req.path)).folderPath;
                res.send(await getFile(folderPath));
                break;   
            case 'delete':
                folderPath = (await deleteFile(req.path)).folderPath;
                res.send(await getFile(folderPath));
                break;
            default:
                res.sendStatus(400);
        }
    } catch (err) {
        handleError(err, res)
    }
})

function handleError(err, res) {
    if (err.code === 'ENOENT') {
        res.status(404).send('Not Found');
    } else {
        console.log(err)
        res.status(500).end();
    }
}

module.exports = router;