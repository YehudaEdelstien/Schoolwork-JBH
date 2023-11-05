const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'react-app', 'build')));

app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup: ", err);
    console.log("Server is listening on port ", PORT)
})