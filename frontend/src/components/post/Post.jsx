import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../fakeData'
import { useState } from 'react'

export default function Post({ post }) {
    const [like, setlike] = useState(false)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setlike(!like)
        setCount(like ? count - 1 : count + 1)
    }
    
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUserName">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postgTopRight">
                        <MoreVert />
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
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
