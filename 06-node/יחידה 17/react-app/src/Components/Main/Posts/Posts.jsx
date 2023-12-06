import { useEffect, useState } from "react"
import axios from "axios";

export default function Posts({ userName }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(`http://localhost:4000/api/posts?userName=${userName}`)
            setPosts(data);
        }
        getData();
    }, [userName])

    async function addComment(postId, text) {
        const { data } = await axios.post(`http://localhost:4000/api/posts/comments?post=${postId}`, { text: text });
        const newPosts = [...posts];
        const postIndex = newPosts.findIndex(el => el.id === postId);
        const newComment = { id: data.id, text: text };
        newPosts[postIndex].comments.push(newComment);
        setPosts(newPosts);
    }

    async function deleteComment(commentId, postId) {
        await axios.delete(`http://localhost:4000/api/posts/comments?comment=${commentId}`);
        const newPosts = [...posts];
        const postIndex = newPosts.findIndex(el => el.id === postId);
        const commentIndex = newPosts[postIndex].comments.findIndex(el => el.id === commentId);
        newPosts[postIndex].comments.splice(commentIndex, 1)
        setPosts(newPosts);
    }

    return (
        <article>
            <h2>Posts</h2>
            {posts.length === 0 ?
                <div aria-busy='true'></div>
                : posts.map((el) => <Post postObject={el} addComment={addComment} deleteComment={deleteComment} key={el.id} />)}
        </article>
    )
}

function Post({ postObject, addComment, deleteComment }) {
    const { id, title, text, comments } = postObject
    return (
        <article>
            <h3>{title}</h3>
            <p>{text}</p>
            <footer>
                <details>
                    <summary><b>Comments</b></summary>
                    <ul>
                        {comments.length === 0 ?
                            <div>No comments yet!</div>
                            : comments.map((el) => <Comment commentObj={el} key={el.id} deleteComment={deleteComment} postId={id} />)}
                    </ul>
                    <AddCommentButton addComment={addComment} postId={id} />
                </details>
            </footer>
        </article>
    )
}

function Comment({ commentObj, deleteComment, postId }) {
    return (
        <li>
            <DeleteCommentButton deleteComment={deleteComment} postId={postId} commentId={commentObj.id}/>
            {commentObj.text}
        </li>
    )
}

function DeleteCommentButton({deleteComment, postId, commentId}) {
    return (
        <button
            className="outline secondary iconButton"
            onClick={() => deleteComment(commentId, postId)}
        >X</button>
    )
}

function AddCommentButton({ addComment, postId }) {
    const [adding, setAdding] = useState(false);
    const [input, setInput] = useState('')

    function resetInput() {
        setInput('');
        setAdding(false);
    }

    // addComment(postId, 'test comment')
    if (!adding) {
        return (
            <button className="secondary outline" onClick={() => setAdding(true)}>Add Comment</button>
        )
    } else {
        return (
            <div class="grid">
                <textarea autoFocus={true} value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                <div class="grid">
                    <button onClick={() => {
                        addComment(postId, input);
                        resetInput()
                    }}>Post</button>
                    <button onClick={resetInput}>Cancel</button>
                </div>
            </div>
        )
    }

}