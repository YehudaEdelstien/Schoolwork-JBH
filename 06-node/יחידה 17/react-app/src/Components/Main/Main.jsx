import { Routes, Route, Navigate } from "react-router-dom"

import Nav from "./Nav/Nav"
import NotFound from '../404/NotFound'

export default function Main(props) {
    if (!props.user) return <Navigate to="/login"/>

    return (
        <body className="container">
            <Nav {...props}/>
            <Routes>
                <Route path="main" element={<h2>Welcome!</h2>}/>
                <Route path="info" element={<h2>info</h2>}></Route>
                <Route path="posts" element={<h2>posts</h2>}></Route>
                <Route path="todos" element={<h2>todos</h2>}></Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </body>
    )
}