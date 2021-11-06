import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Topbar() {
    const { user } = useContext(AuthContext)
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <div className="logo">Hi Social</div>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input placeholder='Search Something...' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItems">
                        <Person />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItems">
                        <Chat />
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconItems">
                        <Notifications />
                        <span className="topbarIconBadge">
                            5
                        </span>
                    </div>
                    <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture} alt="" className="topbarImg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
