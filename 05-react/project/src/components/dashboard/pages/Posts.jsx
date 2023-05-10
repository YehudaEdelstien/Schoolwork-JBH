import React, { useState, useEffect } from 'react';
import baseUrl from '../../baseUrl';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function Posts({ userId }) {
    const [posts, setPosts] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getPosts();

        async function getPosts() {
            try {
                const postData = await baseUrl.get(`posts?userId=${userId}`)
                console.log(postData.data)
                const postArray = postData.data.map((post, index) => ({ ...post, index: index }))
                setPosts(postArray)
            } catch (e) {
                console.error(e);
                setError("Could not get posts. Please refresh the page and try again.")
            }
        }

    }, [userId])

    return (
        <>
            <h2>Posts</h2>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <Routes>
                <Route path="*" element={<AllPosts posts={posts} />} />
                <Route path=":postIndex" element={<FocusedPost posts={posts} />} />
            </Routes>
        </>
    );
}

export default Posts;

function AllPosts({ posts, selectPost }) {
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

function FocusedPost({ posts }) {
    const { postIndex } = useParams();
    const post = posts[postIndex];

    const styleObj = {
        margin: "20px",
        padding: "15px",
        border: "2px solid black",
    }

    return (
        <div>
            <div style={styleObj}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <button>Show comments</button>
        </div>
    )
}