import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import baseUrl from '../../../baseUrl';

export default function FocusedPost({ posts }) {
    const [comments, setComments] = useState();
    const { postIndex } = useParams();

    if (!posts) { // unloaded content error handling
        return <div></div>
    }

    const post = posts[postIndex];



    async function getComments() {
        setComments("loading");

        try {
            const commentData = await baseUrl.get(`comments?postId=${post.id}`);
            console.log(commentData.data);
            setComments(commentData.data);
        } catch (e) {
            setComments("Could not load comments");
        }
    }


    return (
        <div>
            <Link to={'..'}>Go back</Link>
            <Post post={post} />
            {comments ?
                <Comments data={comments} />
                : <button onClick={getComments}>Show comments</button>
            }
        </div>
    )
}

function Post({ post }) {
    const styleObj = {
        margin: "20px",
        padding: "15px",
        border: "5px solid black",
    }

    return (
        <div style={styleObj}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

function Comments({ data }) {
    if (data === "loading") {
        return <div className="Spinner"></div>
    }

    if (typeof data === "string") {
        return <div style={{ color: "red" }}>Error: {data}</div>
    }

    return (
        <>
            <h3>Comments</h3>
            {data.map(comment => <Comment key={comment.id} data={comment}/>)}
        </>
    )
}

function Comment({ data }) {
    const commentStyle = {
        width: "75vw",
        margin: "10px auto",
        padding: "15px",
        borderTop: "1px solid black",
    }

    const usernameStyle = {
        textAlign: "left",
        textDecoration: "underline"
    }

    return (
        <div style={commentStyle}>
            <div style={usernameStyle}>{data.email}</div>
            <h4>{data.name}</h4>
            <p>{data.body}</p>
        </div>
    )
}