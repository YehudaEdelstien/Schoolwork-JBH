import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import baseUrl from '../baseUrl';

export default function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();

    useEffect(() => { // redirect if user is logged in already
        if (localStorage.getItem("username")){
            navigate("/dashboard")
        }
    }, [navigate])

    // component functions

    const submit = async (e) => {
        e.preventDefault();
        try {
            const {data: user} = await baseUrl.get("users?username=" + name)

            localStorage.setItem("username", user[0].username);
            navigate("/dashboard");
        } catch (e) {
            setError(e.message)
        }
    }

    // get last digits of lat value for password, per instructions of project defintion
    const latToPassword = (num) => {
        const passwordLength = 4;
        let str = num.toString();
        return str.slice(-passwordLength);
    }

    // for testing, places valid username and password in the input fields
    const getRandomUser = async () => {
        const { data: users } = await baseUrl.get("users");
        const user = (users[Math.floor(Math.random() * users.length)]);
        setName(user.username);
        setPassword(latToPassword(user.address.geo.lat));
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <button type="button" onClick={getRandomUser}>get a user</button>
                <div>
                    name<input value={name} onChange={({ target }) => setName(target.value)} required></input>
                </div>
                <div>
                    password<input value={password} onChange={({ target }) => setPassword(target.value)} required></input>
                </div>
                <button>login</button>
                <div style={{color: "red"}}>{error}</div>
            </form>
        </>
    );
}