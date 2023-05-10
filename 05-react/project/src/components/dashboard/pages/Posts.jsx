import React, { useState, useEffect } from 'react';
import baseUrl from '../../baseUrl';

function Posts({ userId }) {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getPosts();

        async function getPosts() {
            const postData = await baseUrl.get(`posts?userId=${userId}`)
            console.log(postData.data)
            setPosts(postData.data)
        }
    }, [userId])

    return (
        <>
            <h3>Posts</h3>
            {selectedPost ?
                <FocusedPost />
                : <AllPosts posts={posts}/>}
        </>
    );
}

export default Posts;

function AllPosts({ posts }) {
    return (
        <>
            {posts.map(post => <Post title={post.title} body={post.body} key={post.id}/>)}
        </>
    );
}

function Post({title, body, selectPost}) {
    const styleObj = {
        margin: "20px",
        padding: "15px",
        cursor: "pointer",
        border: "1px solid black",
    }

    return (
        <div style={styleObj}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

function FocusedPost() {
    return (
        <h4>focused post</h4>
    )
}