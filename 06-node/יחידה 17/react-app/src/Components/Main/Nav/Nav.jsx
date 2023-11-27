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
                <li><Link to="/info">info</Link></li>
                <li><Link to="/posts">posts</Link></li>
                <li><Link to="/todos">todos</Link></li>
                <li><Link to="/login" role="button" onClick={logOut}>Log out</Link></li>
            </ul>
        </nav>
    )
}