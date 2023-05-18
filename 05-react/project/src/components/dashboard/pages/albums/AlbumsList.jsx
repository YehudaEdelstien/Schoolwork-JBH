import { Link } from "react-router-dom";

function AlbumsList({ albums }) {
    return (
        <>
            {albums ?
                <>
                    <h4>Choose an album</h4>
                    {albums && albums.map(al => {
                        return (
                            <div key={al.id}>
                                <Link to={String(al.id)}>{al.title}</Link>
                            </div>
                        )
                    })}
                </>
                : <div className="Spinner"></div>}
        </>
    );
}

export default AlbumsList;