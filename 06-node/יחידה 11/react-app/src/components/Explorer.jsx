import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';

import FilePath from './FilePath';
import FileList from './FileList';
import NotFound from "./NotFound";


export default function Explorer() {
    const location = useLocation().pathname

    const [path, setPath] = useState('/')
    const [files, setFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFilePath, setSelectedFilePath] = useState('')
    const [selectedFileText, setSelectedFiletext] = useState('');
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        async function getFiles() {
            const url = 'http://localhost:4000/api' + location
            const options = {
                validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                }
            }

            const { data, status } = await axios.get(url, options);
            setNotFound(status === 404);
            console.log(data)
            data.files && setFiles(data.files);
            data.location && setPath(data.location);
            data.title && setSelectedFile(data.title);
            data.title && setSelectedFilePath(data.location);
            data.text && setSelectedFiletext(data.text);
        }
        getFiles();
    }, [location])

    return (
        <>
            {
                notFound ?
                    <NotFound /> :
                    <div className="container">
                        <div>
                            <FilePath />
                            <FileList list={files} path={path} />
                        </div>
                        <div>
                            <p>Selected file: {selectedFilePath + '/' + selectedFile}</p>
                            <p>Text:</p>
                            <pre>{selectedFileText}</pre>
                        </div>
                    </div>

            }
        </>
    )
}