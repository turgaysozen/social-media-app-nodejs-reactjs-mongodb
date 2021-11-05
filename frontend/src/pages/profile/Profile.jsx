import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/Rightbar'
import './profile.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function Profile() {
    const [user, setUser] = useState({})
    const username = useParams.apply().username

    useEffect(() => {
        (async () => {
            const users = await axios.get(`http://localhost:8800/api/users?username=${username}`)
            setUser(users.data)
        })
            ()
    }, [username])

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRightBar">
                    <div className="profileRightBarTop">
                        <div className="profileCover">
                            <img src={user.coverPicture} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture} alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileInfoName">{user.username}</h2>
                            <span className="profileInfoDesc">{user.desc || 'No Description for this user :('}</span>
                        </div>
                    </div>
                    <div className="profileRightBarBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
