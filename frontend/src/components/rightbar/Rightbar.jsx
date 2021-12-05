import './rightbar.css'
import Online from '../../components/online/Online'
import { Users } from '../../fakeData'
import Ads from '../../components/ads/Ads'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useState, useEffect, useContext } from 'react'


export default function Rightbar({ user }) {
    const { user: currentUser } = useContext(AuthContext)

    const [allFriends, setAllFriends] = useState([])

    useEffect(() => {
        (async () => {
            const friends = await axios.get('http://localhost:8800/api/users/friends/' + currentUser._id)
            console.log(friends.data)
            setAllFriends(friends.data)
        })()
    }, [currentUser])

    const HomeComponent = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <div className="birthdayText">
                        <b>Turgay</b> and <b>3 others</b> have birthday today!
                    </div>
                </div>
                <Ads />
                <h3 className="rightbarTitle">Online Friends</h3>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileComponent = () => {
        return (
            <>
                <h3>User Info</h3>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">{user.relation === 1 ? 'Single' : user.relation === 2 ? 'Married' : 'No Info'}</span>
                    </div>
                </div>
                <h3>Friends</h3>
                <div className="rightbarFollowings">
                    {allFriends.map((friend) => (
                        <div className="rightbarFollowing">
                            <img src={friend.profilePicture} alt="" className="rightbarFollowingImg" />
                            <span className="rightbarFollowingName">{friend.username}</span>
                        </div>
                    ))}
                </div>
                <Ads />
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {user ? <ProfileComponent /> : <HomeComponent />}
            </div>
        </div>
    )
}
