const fs = require('fs/promises');

exports.router = async (req, res, url) => {
    if (url === undefined || url === '') {
        sendPage(__dirname + '/pages.html', res);
    } else {
        sendPage(`${__dirname}/${url}.html`, res);
    }
}

async function sendPage(filepath, res) {
    try {
        const file = await fs.readFile(filepath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
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