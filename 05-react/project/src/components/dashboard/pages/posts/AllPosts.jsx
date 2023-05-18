import { Link } from "react-router-dom";

export default function AllPosts({ posts, selectPost }) {
    return (
        <>
            {posts ?
            posts.map(post => <Post
                title={post.title}
                body={post.body}
                postId={post.index}
                key={post.id}
                />)
            : <div className='Spinner'></div>}
        </>
    );
}

function Post({ title, body, postId }) {
    const styleObj = {
        margin: "20px",
        padding: "15px",
        borderTop: "1px solid black",
    }

    return (
        <div style={styleObj}>
            <h4>
                <Link to={String(postId)}>{title}</Link>
            </h4>
            <p>{body}</p>
        </div>
    )
}