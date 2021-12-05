import React from 'react'
import "./CloseFriend.css";

export default function CloseFriends({ friend }) {

    return (
        <li className="sidebarFriend">
            <img src={friend.profilePicture} alt="Friend Img" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{friend.username}</span>
        </li>
    )
}
