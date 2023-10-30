const http = require('http');

// routes
const pagesRouter = require('./pagesRouter/pagesRouter.js').router;
const filesRouter = require('./filesRouter/filesRouter.js').router;
const contactsRouter = require('./contactsRouter/contactsRouter.js').router;

const server = http.createServer((req, res) => {
    const urlArray = req.url.split("/");
    console.log(urlArray);
    switch (urlArray[1]) {
        case 'pages':
            pagesRouter(req, res, urlArray[2]);
            return;
        case 'files':
            filesRouter(req, res, urlArray[2]);
            return;
        case 'contacts':
            contactsRouter(req, res, urlArray[2]);
            return;
        default:
            res.writeHead(404);
            res.end("404 not found")
            return;
    }
});

server.listen(3000, () => {
    console.log('server is listening on 3000');
})
