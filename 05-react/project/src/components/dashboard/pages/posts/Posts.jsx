import React, { useState, useEffect } from 'react';
import baseUrl from '../../../baseUrl';
import { Routes, Route } from 'react-router-dom';

import AllPosts from './AllPosts';
import FocusedPost from './FocusedPost';

function Posts({ userId }) {
    const [posts, setPosts] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getPosts();

        async function getPosts() {
            try {
                const postData = await baseUrl.get(`posts?userId=${userId}`)
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
            <h2>POSTS</h2>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <Routes>
                <Route path="*" element={<AllPosts posts={posts} />} />
                <Route path=":postIndex" element={<FocusedPost posts={posts} />} />
            </Routes>
        </>
    );
}

export default Posts;