import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Feed({ username }) {
    const [post, setPost] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            const posts = username
                ? await axios.get(`http://localhost:8800/api/posts/profile/${username}`)
                : await axios.get('http://localhost:8800/api/posts/timeline/' + user._id)
            setPost(posts.data)
        })
            ()
    }, [username, user._id])

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
