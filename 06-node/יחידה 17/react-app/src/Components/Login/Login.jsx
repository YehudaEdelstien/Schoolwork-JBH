import { useEffect, useState } from "react"
import axios from "axios"

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchRandomUser() {
        const {data} = await axios.get('http://localhost:4000/api/users/random');
        setUserName(data.userName);
        setPassword(data.password);
    }

    async function onLogIn(e) {
        try {
            e.preventDefault()
            const {data} = await axios.get(`http://localhost:4000/api/users/exists?userName=${userName}&password=${password}`);
            data === true ? setErrorMessage('Success!') : setErrorMessage("No such username and password");
        } catch (err) {
            setErrorMessage(err);
        }
    }

    return (
        <section className="container">
            <article>
                <div id="userGetter" onClick={() => {fetchRandomUser()}}/>
                <form >
                    <h1>Log in</h1>
                    <label htmlFor="username">
                        User Name
                        <input type="text" id="username" name="username" placeholder="User Name" value={userName} onChange={e => setUserName(e.target.value)} required />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </label>
                    <button type="submit" onClick={onLogIn}>Submit</button>
                    <div>{errorMessage}</div>
                </form>
            </article>
        </section>
    )
}