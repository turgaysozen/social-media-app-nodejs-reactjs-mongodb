import React from 'react'

export default function closeFriends({friend}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img src={friend.profilePicture} alt="Friend Img" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{friend.username}</span>
            </li>
        </div>
    )
}
