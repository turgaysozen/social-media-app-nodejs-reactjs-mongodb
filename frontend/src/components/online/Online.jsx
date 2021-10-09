import './online.css'

export default function Online({ user }) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                    <img src={user.profilePicture} alt="" className="rightbarFriendImg" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
