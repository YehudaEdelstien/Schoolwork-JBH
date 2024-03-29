const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')

const api = require('./api');

const PORT = 4000;

app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, 'react-app', 'build')));

app.use('/api', api)
app.get('*', (req, res) => {
    let websitepath = (path.join(__dirname, 'react-app', 'build', 'index.html'));
    res.sendFile(websitepath);
});


app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup: ", err);
    console.log("Server is listening on port ", PORT)
})