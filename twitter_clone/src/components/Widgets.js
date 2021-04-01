import React from 'react';
import "../css/Widget.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';

export default function Widgets() {
    return (
        <div className="widgets">
                <div className="widgets__input">
                <SearchIcon  className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
        </div> 

        <div className="widets__widgetContainer">
            <h2>What's happening?</h2>        

            <TwitterTweetEmbed tweetId={"1363830633512902656"} />
          
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="EGenesisblock"
                options={{height: 400}}
                />


    <TwitterShareButton
    url={'https://youtube.com'}
    options={{ text: '#reactjs is awesome', via: 'si3mshady' }}
  />

            

         </div>

            
        </div>
    )
}
