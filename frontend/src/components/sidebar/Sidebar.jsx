import './sidebar.css'
import { RssFeed, Chat, Videocam, Group, Bookmark, ContactSupport, Work, Event, School } from '@mui/icons-material'
import { Users } from '../../fakeData'
import CloseFriends from '../closeFriends/closeFriends'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemtext">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className='sidebarIcon' />
                        <span className="sidebarListItemtext">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListItemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <ContactSupport className='sidebarIcon' />
                        <span className="sidebarListItemtext">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className='sidebarIcon' />
                        <span className="sidebarListItemtext">Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListItemtext">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon' />
                        <span className="sidebarListItemtext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More...</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u => (
                        <CloseFriends key={u.id} friend={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
