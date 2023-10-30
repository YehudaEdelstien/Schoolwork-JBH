const fs = require('fs/promises');

exports.router = async (req, res, url) => {
    try {
        let file;
        if (url === undefind || url === '') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            file = await fs.readFile(__dirname + '/filesIndex.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end(await fs.readFile(`${__dirname}/${url}.txt`));
        }
        res.end(file);
    } catch(error) {
        if (error.code == 'ENOENT') {
            res.writeHead(404);
            res.end('404 page not found');
        } else {
            res.writeHead(400);
            console.error(error);
            res.end('error');
        }
    }
}