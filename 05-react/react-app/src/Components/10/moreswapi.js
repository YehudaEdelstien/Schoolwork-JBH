import React, { useState, useEffect } from 'react';

function MoreSwapi() {
    const [title, setTitle] = useState("loading...");
    const [director, setDirector] = useState("");

    useEffect(() => {
        const setMovieDetails = async () => {
            const movieObj = await fetch("https://swapi.dev/api/films/1").then(res=>res.json())
            setTitle(movieObj.title);
            setDirector(movieObj.director);
        }
        setMovieDetails();
    }, [])

    return ( 
        <div>
            <h1>{title}</h1>
            <h2>{director}</h2>
        </div>
     );
}

export default MoreSwapi