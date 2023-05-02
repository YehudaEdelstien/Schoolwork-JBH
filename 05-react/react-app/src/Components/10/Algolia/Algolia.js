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
                setResults(hits);
            } catch (err) {
                setResults([err])
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
                        <a href={el.url}>{el.title}</a>
                    </li>
                )
            })}
        </ul>
    )
}