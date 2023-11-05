const fs = require('fs/promises');
const path = require('path');

const fh = {
    listFiles: async function listFiles(filePath = '') {
        dirPath = path.join(__dirname, 'UserFiles', filePath)
        files = await fs.readdir(dirPath);
        return files;
    },
    getFileText: async function getFileText(filePath = '') {
        dirPath = path.join(__dirname, 'UserFiles', filePath)
        text = (await fs.readFile(dirPath, 'utf-8'));
        return text;
    },
};

module.exports.filesHandler = fh;

// tests
(async function test(){
    // fh.getFile();
    console.log(path.extname('file'))
    fh.getFile('file1.txt');
})();