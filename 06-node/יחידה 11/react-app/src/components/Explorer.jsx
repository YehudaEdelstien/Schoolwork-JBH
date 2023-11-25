import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';

import FilePath from './FilePath';
import FileList from './FileList';
import NotFound from "./NotFound";
import Info from "./Info";
import FileDisplayer from "./FileDisplayer";

export default function Explorer() {
    const location = useLocation().pathname;
    const navigate = useNavigate();

    const [path, setPath] = useState('/')
    const [files, setFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedFilePath, setSelectedFilePath] = useState('')
    const [selectedFileText, setSelectedFiletext] = useState('');
    const [selectedFileInfo, setSelectedFileInfo] = useState({});
    const [notFound, setNotFound] = useState(false)

    const axiosOptions = {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    }
    useEffect(() => {
        async function getFiles() {
            const url = 'http://localhost:4000/api' + location

            const { data, status } = await axios.get(url, axiosOptions);
            setNotFound(status === 404);
            setStates(data);
        }
        getFiles();
    }, [location])

    async function requestHandler(request = '', reqData = {}) {
        const url = 'http://localhost:4000/api' + location

        const { data } = await axios.post(url, {
            request: request,
            data: reqData
        }, axiosOptions);

        switch (request) {
            case 'rename':
                console.log(data)
                navigate(data.location + reqData.name + '.txt');
                setStates(data);
                break;
            case 'copy':
                setFiles(data.files || '');
                setPath(data.location || '');
                break;
            case 'delete':
                navigate('..');
                break;
            default:
                console.error('Incorrect request type!');
                break;
        }
    }

    function setStates(data) {
        data.files && data.files.sort();
        data.files && data.files.sort((a, b) => {
            return a.endsWith('.txt') && !b.endsWith('.txt') ? 1 : -1;
        }); 
        setFiles(data.files || '');
        setPath(data.location || '');
        setSelectedFile(data.title || '');
        setSelectedFilePath(data.location || '');
        setSelectedFiletext(data.text || '');
        setSelectedFileInfo(data.info || '');
    }

    return (
        <>
            {
                notFound ?
                    <NotFound /> :
                    <div className="grid">
                        <div>
                            <FilePath />
                            <FileList list={files} path={path} />
                        </div>
                        <FileDisplayer title={selectedFile} text={selectedFileText} requestHandler={requestHandler} />
                        <Info info={selectedFileInfo} />
                    </div>

            }
        </>
    )
}