import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Info({ userName }) {
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(`http://localhost:4000/api/users/info?userName=${userName}`);
            setUserData(data);
        }
        fetchData()
    }, [userName])

    return (

        <article>
            <h2>Info</h2>
            <table role='grid'>
                <tbody>
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
                </tbody>
            </table>
        </article>
    )
}