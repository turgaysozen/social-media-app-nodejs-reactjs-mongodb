import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/Rightbar'
import './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRightBar">
                    <div className="profileRightBarTop">
                        <div className="profileCover">
                            <img src="assets/person/4.jpeg" alt="" className="profileCoverImg" />
                            <img src="assets/person/8.jpeg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileInfoName">Turgay SOZEN</h2>
                            <span className="profileInfoDesc">Hello This is a desc</span>
                        </div>
                    </div>
                    <div className="profileRightBarBottom">
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
