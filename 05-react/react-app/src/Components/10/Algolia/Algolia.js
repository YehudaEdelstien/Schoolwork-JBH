import React, { useState, useEffect } from 'react';
import baseUrl from "./api";

export default function AlgoliaApp() {
    const [query, setQuery] = useState("hooks");
    const [results, setResults] = useState([{title: "loading..."}])

    useEffect(() => {
        const getData = async () => {
            setResults([{title: "loading..."}])
            try {
                const data = await baseUrl.get(query);
                const hits = (data.data.hits);
                console.log(hits)
                setResults(hits);
            } catch (err) {
                console.error("Could not get links. " + err.message)
                setResults([{ title: "Something went wrong. please try again"}])
            }
        }
        getData();
    }, [query])


    return (
        <div>
            <QueryField onClick={setQuery}/>
            <LinkList list={results} />
        </div>
    );
}

function QueryField({onClick}) {
    const [value, setValue] = useState("");

    function handleChange({target}) {
        setValue(target.value)
    }

    return (
        <div>
            <input value={value} onChange={handleChange}/>
            <button onClick={() => onClick(value)}>Search</button>
        </div>
    )
}

function LinkList({ list }) {
    return (
        <ul>
            {list.map((el, index) => {
                return (
                    <li key={index}>
                        <a href={el.url || el.story_url}>{el.title || el.story_title}</a>
                    </li>
                )
            })}
        </ul>
    )
}