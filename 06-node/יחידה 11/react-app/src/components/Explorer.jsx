import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios';

import NavBar from './NavBar';
import FileList from './FileList';


export default function Explorer() {
    const location = useLocation().pathname

    const [files, setFiles] = useState([])
    const [gettingFiles, setGettingFiles] = useState([])

    useEffect(() => {
        async function getFiles() {
            const url = 'http://localhost:4000/api' + location
            const {data} = await axios.get(url);
            setFiles(data);
        }
        getFiles();
    }, [location])

    return (
        <>
            <NavBar />
            <FileList list={files} />
        </>
    )
}