import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";

import baseUrl from "../baseUrl";

import ToDos from './pages/ToDos';
import Info from './pages/Info';

function Dashboard() {
    const [userData, setUserData] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem("username")
        if (!username) {
            navigate("/login");
        }
        fetchData(username)
    }, [])

    const fetchData = async (name) => {
        const {data} = await baseUrl.get("users?username=" + name);
        setUserData(data[0])
    }

    if (!userData) return (<div></div>)

    return (<>
        <Navbar username={userData.username}/>

        <Routes>
            <Route path='*' element={<Info userData={userData}/>} />
            <Route path="todos" element={<ToDos />} />
        </Routes>
    </>
    );
}

export default Dashboard;

function Navbar({username}) {
    return (
        <nav>
            Hello {username}!-
            <Link to="Info">Info</Link>-
            <Link to="Todos">Todos</Link>-
            <Link to="Posts">Posts</Link>-
            <Link to="Albums">Albums</Link>-
            <a href="/login" onClick={() => {
                localStorage.removeItem("username");
            }}>Logout</a>
        </nav>
    )
}