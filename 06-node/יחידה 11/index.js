const express = require('express');
const path = require('path');
const app = express();
const serveStatic = require('serve-static')

const api = require('./api');

const PORT = 4000;


// app.use(express.static(path.join(__dirname, 'react-app', 'build')));
app.use(serveStatic(path.join(__dirname, 'react-app', 'build'), {fallthrough: true}))

app.use('/api', api)
app.get('*', (req, res) => {
    let websitepath = (path.join(__dirname, 'react-app', 'build', 'index.html'));
    res.sendFile(websitepath);
});


app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup: ", err);
    console.log("Server is listening on port ", PORT)
})