const { futimesSync } = require('fs');
const fs = require('fs/promises');
const path = require('path');


async function getFile(filePath = '') {
    console.log(filePath)
    filePath = decodeURI(filePath);

    const reqPath = createRequestPath(filePath);
    const stat = await fs.stat(reqPath);
    
    let responseObject = {};
    if (stat.isFile()) {
        responseObject = await createFileResponse(reqPath, filePath, stat);
    } else if (stat.isDirectory){
        responseObject = await createFolderResponse(reqPath, filePath);
    }
    responseObject.location = responseObject.location.replace('\\', '/')

    return responseObject;
};

async function renameFile(filePath = '', newName='test') {
    filePath = decodeURI(filePath);
    const reqPath = createRequestPath(filePath);
    const fileExt = path.extname(filePath);

    let newPath = await createFileName(newName, fileExt);
    await fs.rename(reqPath, newPath);
    return({
        path: filePath,
        folderPath: path.dirname(filePath),
    });
}

async function copyFile(filePath = '') {
    filePath = decodeURI(filePath);

    const reqPath = createRequestPath(filePath);
    const fileExt = path.extname(filePath);
    const fileName = path.parse(filePath).name;

    let newPath = await createFileName(fileName, fileExt);
    await fs.copyFile(reqPath, newPath);
    return({
        path: filePath,
        folderPath: path.dirname(filePath),
    }); 
}

async function deleteFile(filePath = '') {
    filePath = decodeURI(filePath);

    const reqPath = createRequestPath(filePath);
    fs.unlink(reqPath);
    return({
        path: filePath,
        folderPath: path.dirname(filePath),
    }); 
}


// helper functions

function createRequestPath(filePath = '') {
    return path.join(__dirname, 'UserFiles', filePath);
}

async function createFileResponse(reqPath, filePath, stat) {
    const responseObject = {}
    const dirPath = path.join(reqPath, '..');
    responseObject.files = await fs.readdir(dirPath);
    responseObject.location = path.join(filePath, '..');
    responseObject.title = path.basename(reqPath);
    responseObject.text = await fs.readFile(reqPath, 'utf-8');
    responseObject.info = {
        size: stat.size,
        created: stat.birthtime,
        modified: stat.mtime
    };
    return responseObject;
}

async function createFolderResponse(reqPath, filePath) {
    const responseObject = {}
    responseObject.files = await fs.readdir(reqPath);
    responseObject.location = filePath;
    return responseObject;
}

async function createFileName(fileName, fileExt) { 
    let newPath = createRequestPath(fileName);
    let number = 0;
    
    // handle file with new name already exists
    while (await fileExists(`${newPath}${fileExt}`)) { 
        number++;
        newPath = `${createRequestPath(fileName)} (${number})`;
    }
    
    newPath += fileExt;
    
    return newPath;
}

async function fileExists(path = '') {
    try {
        await fs.stat(path);
        return true;
    } catch {
        return false;
    }
}


//exports

module.exports.getFile = getFile;
module.exports.renameFile = renameFile;
module.exports.copyFile = copyFile;
module.exports.deleteFile = deleteFile;