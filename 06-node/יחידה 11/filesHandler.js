const fs = require('fs/promises');
const path = require('path');

const fh = {
    listFiles: async function listFiles(directory = '') {
        dirPath = path.join(__dirname, 'UserFiles', directory)
        files = await fs.readdir(dirPath);
        return files;
    },
};

module.exports.fileHandler = fh;
