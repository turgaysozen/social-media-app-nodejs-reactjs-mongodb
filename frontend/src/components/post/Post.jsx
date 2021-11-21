import './post.css'
import { MoreVert } from '@mui/icons-material'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Post({ post }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setlike] = useState(false)
    const [count, setCount] = useState(post.likes.length)
    const [user, setUser] = useState({})
    const { user: currentUser } = useContext(AuthContext)

    useEffect(() => {
        // if current user id is already in post.likes, acts like it's already liked
        setlike(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        (async () => {
            const users = await axios.get(`http://localhost:8800/api/users/${post.userId}`)
            setUser(users.data)
        })
            ()
    }, [post.userId])

    // get user from the context and handle like or dislike posts
    const handleClick = async () => {
        try {
            const url = "http://localhost:8800/api/posts/" + post._id + "/like"
            await axios.post(url, { userId: currentUser._id })
        }
        catch (error) {
            alert(error)
        }

        setlike(!like)
        setCount(like ? count - 1 : count + 1)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={'/profile/' + user.username}>
                            <img src={user.profilePicture} alt="" className="postProfileImg" />
                        </Link>
                        <Link style={{ textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }} to={'/profile/' + user.username}>
                            {user.username}
                        </Link>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postgTopRight">
                        <MoreVert />
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={PF+ '/' + post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={handleClick} src="assets/like.png" alt="" className="likeIcon" />
                        <img onClick={handleClick} src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="likeCount">{count} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments || 'no'} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
