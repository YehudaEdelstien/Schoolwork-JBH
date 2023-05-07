import { Link, Outlet, Navigate } from "react-router-dom";

function Dashboard() {
    const userName = localStorage.getItem("userId")
    return (<>
        {!userName && <Navigate to="/login"/>}
        <nav>
            Hello {userName}!-
            <Link to="Info">Info</Link>-
            <Link to="Todos">Todos</Link>-
            <Link to="Posts">Posts</Link>-
            <Link to="Albums">Albums</Link>-
            <a href="/login" onClick={logOut}>Logout</a>
        </nav>
        <Outlet />
    </>
    );
}

export default Dashboard;

function logOut() {
    localStorage.removeItem("userId")
}