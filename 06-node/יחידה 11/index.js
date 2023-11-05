const express = require('express');
const path = require('path');
const app = express();

const {filesHandler} = require('./filesHandler');

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'react-app', 'build')));

app.get('/', async (req, res) => {
    extension = path.extname(req.path);
    console.log(req.path)

    if (extension === '') {
        res.send(await filesHandler.listFiles(req.path));
    } else if (extension === '.txt') {
        res.send(await filesHandler.getFileText(req.path));
    }
})

app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup: ", err);
    console.log("Server is listening on port ", PORT)
})