import React, { useState, useEffect } from 'react';

function UseStateTest() {
    const [myState, setMyState] = useState("state");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        let isSubscribed = true;
        
        const fetchData = async () => {
            const data = await fetch(`https://api.chucknorris.io/jokes/random?category=science`);
            const json = await data.json();
            console.log(isSubscribed)

            if (isSubscribed) {
                setMyState(json.value);
            }
        }

        fetchData()
            .catch(console.error);;

        return () => isSubscribed = false; //unsubscribe if another request is made
    }, [inputValue])

    const updateValue = ({target}) => {
        setInputValue(target.value);
    }

    return (
        <div>
            <p>{myState}</p>
            <input value={inputValue} onChange={updateValue}></input>
        </div>
    );
}

export default UseStateTest;