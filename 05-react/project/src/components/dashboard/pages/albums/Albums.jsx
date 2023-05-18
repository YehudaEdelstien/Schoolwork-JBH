import React, { useState, useEffect } from 'react';
import baseUrl from '../../../baseUrl';
import { Routes, Route } from 'react-router-dom';

import AlbumsList from "./AlbumsList";
import Album from "./Album";

function Albums({ userId }) {
    const [albums, setAlbums] = useState();

    useEffect(() => {
        async function getAlbums() {
            try {
                const albumData = await baseUrl.get(`users/${userId}/albums`)
                const albumArray = albumData.data.map((album, index) => ({ ...album, index: index }))
                setAlbums(albumArray)
            } catch (e) {
                console.error(e);
            }
        }

        getAlbums();
    }, [userId])

    return (
        <>
            <h2>Albums</h2>
            <Routes>
                <Route path="/" element={<AlbumsList albums={albums}/>}/>
                <Route path=":albumIndex" element={<Album albums={albums}/>}/>
            </Routes>
        </>
    );
}

export default Albums;