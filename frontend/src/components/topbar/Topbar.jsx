import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <div className=" logo">Hi Social</div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
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
                        <Person/>
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItems">
                        <Chat/>
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconItems">
                        <Notifications/>
                        <span className="topbarIconBadge">
                            5
                        </span>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    )
}
 