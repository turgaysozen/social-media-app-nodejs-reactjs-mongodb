import './post.css'
import { MoreVert } from '@mui/icons-material'

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUserName">Turgay SÖZEN</span>
                        <span className="postDate">5 min. ago</span>
                    </div>
                    <div className="postgTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <hr className="postHr" />
                <div className="postCenter">
                    <span className="postText">Post Text</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="likeCount">45 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">11 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
