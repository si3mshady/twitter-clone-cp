import React from 'react'
import '../css/Sidebar.css'
import  SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SubjectIcon from '@material-ui/icons/Subject';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Button} from '@material-ui/core'

export default function Sidebar() {
    return (
        <div className="sidebar">
        {/* Twitter icon */}
        <TwitterIcon className="sidebar__twitterIcon" />
        
        <SidebarOption Icon={HomeIcon} active text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />        
        <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
        <SidebarOption Icon={AllInboxIcon} text="Messages" />
        <SidebarOption Icon={BookmarksIcon} text="Bookmark" />
        <SidebarOption Icon={SubjectIcon} text="List" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
        <Button variant="outlined" className="sidebar__tweet"
        fullWidth
        >Tweet</Button>
        </div>
    )
}
