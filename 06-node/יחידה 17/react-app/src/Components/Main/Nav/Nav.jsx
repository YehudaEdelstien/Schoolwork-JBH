import {Link} from "react-router-dom";

export default function Nav({user, setUser}) {
    function logOut(e) {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <nav>
            <ul>
                <li><strong>{user}</strong></li>
            </ul>
            <ul>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/login" role="button" onClick={logOut}>Log out</Link></li>
            </ul>
        </nav>
    )
}