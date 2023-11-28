import { Routes, Route, Navigate } from "react-router-dom"

import Nav from "./Nav/Nav"
import Info from "./Info/Info"
import NotFound from '../404/NotFound'
import Todos from "./Todos/Todos"

export default function Main(props) {
    if (!props.user) return <Navigate to="/login"/>

    return (
        <div className="container">
            <Nav {...props}/>
            <Routes>
                <Route path="main" element={<h2>Welcome!</h2>}/>
                <Route path="info" element={<Info userName={props.user}/>}></Route>
                <Route path="todos" element={<Todos userName={props.user}/>}></Route>
                <Route path="posts" element={<h2>posts</h2>}></Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}