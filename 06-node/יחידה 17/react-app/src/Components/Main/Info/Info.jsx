import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ({ userName }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchData() {
            console.log(`http://localhost:4000/api/users/info?userName=${userName}`)
            const { data } = await axios.get(`http://localhost:4000/api/users/info?userName=${userName}`);
            console.log(data)
            setUserData(data);
        }
        fetchData()
    }, [])

    return (
        
        <section>
            <h2>Info</h2>
            <table role='grid'>
                <tr>
                    <td>user name</td>
                    <td>{userData && userData.user_name}</td>
                </tr>
                <tr>
                    <td>register date</td>
                    <td>{userData && userData.register_date}</td>
                </tr>
                <tr>
                    <td>posts</td>
                    <td>{userData && userData.posts}</td>
                </tr>
                <tr>
                    <td>todos</td>
                    <td>{userData && userData.todos}</td>
                </tr>
            </table>

        </section>
    )
}