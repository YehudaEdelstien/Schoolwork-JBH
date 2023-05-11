import React, { useState, useEffect } from 'react';
import baseUrl from '../../../baseUrl';

function Albums({ userId }) {
    const [albums, setAlbums] = useState();

    useEffect(() => {
        async function getAlbums() {
            try {
                const albumData = await baseUrl.get(`photos?userId=${userId}`)
                const albumArray = albumData.data.map((album, index) => ({ ...album, index: index }))
                console.log(albumArray);
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
        </>
    );
}

export default Albums;