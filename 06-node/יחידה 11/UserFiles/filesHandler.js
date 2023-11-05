const fs = require('fs/promises');
const path = require('path');
const { log } = console;

const fh = {
    listFiles: async function listFiles(directory = '') {
        dirPath = path.join(__dirname, directory)
        files = await fs.readdir(dirPath);
        return files;
    },
};

module.exports.fileHandler = fh;

// tests

// (async function tester() {
//     // log(await fh.listFiles());
//     // log(await fh.listFiles(''));
//     // log(await fh.listFiles('folder1'));
//     // log(await fh.listFiles('/folder1'));
//     // log(await fh.listFiles('./folder1'));
//     // log(await fh.listFiles('folder5'));
// })();