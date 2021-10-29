import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Feed({ username }) {
    const [post, setPost] = useState([])

    useEffect(() => {
        (async () => {
            const posts = username
                ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
                : await axios.get('http://localhost:8800/api/posts/timeline/60cc36dab620653738c9f78f')
            setPost(posts.data)
        })
            ()
    }, [])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {post.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}
