const fs = require('fs/promises');
const path = require('path');

async function getFile(filePath = '') {

    const responseObject = {};
    const reqPath = path.join(__dirname, 'UserFiles', filePath)
    const stat = await fs.stat(reqPath);

    if (stat.isFile()) {
        const dirPath = path.join(reqPath, '..')
        responseObject.files = await fs.readdir(dirPath);
        responseObject.location = path.join(filePath, '..');
        responseObject.title = path.basename(reqPath);
        responseObject.text = await fs.readFile(reqPath, 'utf-8');
        responseObject.info = {
            size: stat.size,
            created: stat.birthtime,
            modified: stat.mtime
        }
    } else if (stat.isDirectory){
        responseObject.files = await fs.readdir(reqPath);
        responseObject.location = filePath;
    }
    responseObject.location = responseObject.location.replace('\\', '/')

    return responseObject;
};

module.exports.getFile = getFile;