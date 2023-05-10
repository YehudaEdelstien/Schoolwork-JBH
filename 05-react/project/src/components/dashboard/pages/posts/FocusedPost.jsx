import React, { useState } from 'react';
import { useParams } from "react-router-dom";

export default function FocusedPost({ posts }) {
    const [comments, setComments] = useState();

    const { postIndex } = useParams();
    const post = posts[postIndex];

    const styleObj = {
        margin: "20px",
        padding: "15px",
        border: "2px solid black",
    }

    function getComments() {

    }

    return (
        <div>
            <div style={styleObj}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            {comments ?
                <div>comments</div>
                : <button>Show comments</button>
            }
        </div>
    )
}