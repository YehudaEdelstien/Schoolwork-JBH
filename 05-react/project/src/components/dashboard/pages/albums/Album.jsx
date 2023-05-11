import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import baseUrl from '../../../baseUrl';
import warning from '../../../../resources/warning.png'

function Album({ albums }) {
    const [album, setAlbum] = useState()
    const [pictureCount, setPictureCount] = useState(10)
    const { albumIndex } = useParams()

    useEffect(() => {
        async function getAlbums() {
            try {
                const albumData = await baseUrl.get(`albums/${albumIndex}/photos`)
                const albumArray = albumData.data.map((album, index) => ({ ...album, index: index }))
                setAlbum(albumArray)
            } catch (e) {
                console.error(e);
            }
        }

        getAlbums();
    }, [albumIndex])

    if (!album || !albums) { // unloaded content error handling
        return <div className='Spinner'></div>
    }

    function loadMoreImages() {
        setPictureCount(prev => Math.min(prev + 10, album.length))
    }

    const imagesDataArray = album.slice(0, pictureCount)

    return (
        <>
            <Link to={'..'}>Go back</Link>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {imagesDataArray.map(img => <Photo imageData={img} key={img.id} />)}
            </div>
            <div style={{ marginBottom: "25px" }}>
                {pictureCount < album.length && <button onClick={loadMoreImages}>Load more</button>}
            </div>
        </>
    );
}

export default Album;

function Photo({ imageData }) {
    const [src, setSrc] = useState()

    useEffect(() => { // display spinner if data doesn't load
        const img = new Image();
        img.src = imageData.thumbnailUrl;
        img.onload = () => {
            setSrc(imageData.thumbnailUrl)
        };
        img.onerror = () => {
            setSrc(warning)
        }
    })

    const styleObj = {
        width: "200px",
        height: "220px",
        margin: "10px"
    }

    return (
        <div style={styleObj}>
            {src ?
                <img src={src} alt={styleObj.id}></img>
                : <div className='Spinner'></div>
            }
            <p>{imageData.title}</p>
        </div>
    )
}