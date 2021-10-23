import './post.css'
import { MoreVert } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'

export default function Post({ post }) {
    const [like, setlike] = useState(false)
    const [count, setCount] = useState(post.likes.length)
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const users = await axios.get(`http://localhost:8800/api/users/${post.userId}`)
            setUser(users.data)
        })
            ()
    }, post.userId)

    const handleClick = () => {
        setlike(!like)
        setCount(like ? count - 1 : count + 1)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postgTopRight">
                        <MoreVert />
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={handleClick} src="assets/like.png" alt="" className="likeIcon" />
                        <img onClick={handleClick} src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="likeCount">{count} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
