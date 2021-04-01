import React, {forwardRef} from 'react'
import '../css/Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';





export default function Post({
    displayName,
    userName,
    verified,
    timestamp,
    text, 
    image, 
    avatar
}) {
    return (
        <div className="post">

                <div className="post__avatar">
                    <Avatar src={avatar}>

                    </Avatar>
                </div>

                <div className="post__body">
                    {/* different secions in the body */}
                    {/* header */}
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                               {displayName}{" "} <span className="post__headerSpecial">
                               { verified &&  <VerifiedUserIcon 
                                    className="post__badge"
                                /> } {userName} </span>
                            </h3>

                        </div>


                        <div className="post__headerDescription">

                                <p>{text}</p>                            


                        </div>


                    </div>
                    <img src={image}/>
                <div className="post__footer">

                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon  fontSize="small" />
                        <FavoriteBorderIcon  fontSize="small" />
                        <PublishIcon  fontSize="small" />
                </div>
          


                </div>

             
            
        </div>
    )
}


// https://media.giphy.com/media/npxXYT77DaRji/giphy.gif

