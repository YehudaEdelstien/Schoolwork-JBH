import { Link } from "react-router-dom";

function HomePage() {
    return (<>
        <h1>Home Page</h1>
        <div>
            <h2>
                <Link to="/products">Products</Link>
            </h2>
        </div>
    </>);
}

export default HomePage;