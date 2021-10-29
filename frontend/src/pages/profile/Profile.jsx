import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/Rightbar'
import './profile.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Profile() {
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const users = await axios.get(`http://localhost:8800/api/users?username=Turgay`)
            setUser(users.data)
        })
            ()
    }, [])

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
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBarBottom">
                        <Feed username='Turgay' />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
