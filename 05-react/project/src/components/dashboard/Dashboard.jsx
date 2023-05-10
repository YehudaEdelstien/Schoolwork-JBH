import { useState, useEffect } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";

import baseUrl from "../baseUrl";

import Info from './pages/Info';
import ToDos from './pages/todos/ToDos';
import Posts from './pages/posts/Posts';

function Dashboard() {
    const [userData, setUserData] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem("username")
        if (!username) {
            navigate("/login");
        }
        
        const fetchData = async () => {
            const { data } = await baseUrl.get("users?username=" + username);
            setUserData(data[0])
        }
        fetchData()
        
    }, [navigate])

    if (!userData) return (<div>loading...</div>)

    return (<>
        <Navbar username={userData.username} />

        <Routes>
            <Route path='*' element={<Info userData={userData} />} />
            <Route path="todos" element={<ToDos userId={userData.id}/>} />
            <Route path="posts/*" element={<Posts userId={userData.id}/>}/>
        </Routes>
    </>
    );
}

export default Dashboard;

function Navbar({ username }) {
    return (
        <nav>
            Hello {username}!-----
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