import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>404 Error, file not found.</p>
            <Link to='/'>Return to root</Link>
        </div>
    )
}