import { useEffect, useState } from "react"
import axios from "axios";


export default function Posts({userName}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const {data} = await axios.get(`http://localhost:4000/api/posts?userName=${userName}`)
            setPosts(data)
            console.log(data)
        }
        getData();
    }, [userName])

    console.log(posts.length)
    return (
        <article>
            <h2>Posts</h2>
            {posts.length === 0? 
            <div aria-busy='true'></div> 
            :posts.map((el) => <Post postObject={el} key={el.id}/>)}
        </article>
    )
}

function Post({postObject}) {
    const {title, text, comments} = postObject
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
                        : comments.map((el) => <Comment commentObj={el} key={el.id}/>)}
                    </ul>
                    <AddCommentButton/>
                </details>
            </footer>
        </article>
    )
}

function Comment({commentObj}) {
    return (
        <li>
            {commentObj.text}
        </li>
    )
}

function AddCommentButton() {
    return (
        <button className="secondary outline">Add Comment</button>
    )
}