import React, {useState} from 'react'
import '../css/TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import Axios from 'axios'
export default function TweetBox({setNewPosts}) {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault();
        const post =  {
           
            displayName: "elGenesisBlock",
            username: "genesisBlock",
            verified: true,
            text: tweetMessage,
            avatar: "https://media.giphy.com/media/npxXYT77DaRji/giphy.gif",
            image: tweetImage
        }


       
        const url = process.env.REACT_APP_ADD_POST
        // const url = "http://localhost:9000/v1/twitter/addPost"
        console.log(url)
        Axios.post(url, post).then(data => 
            {console.log('clicked')
            setNewPosts(data)}
            
            )

        setTweetMessage('')
        setTweetImage('')
               



    }
    return (
        <div className="tweetBox">

            <form>
                <div className="tweetBox__input">
                        <Avatar src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7b750a1-c488-43f2-ab4e-9e82b5f4e561/d7wdns3-3e6bfbd0-ff19-4cb3-b8d0-81042c951473.jpg/v1/fill/w_720,h_960,q_75,strp/silver_surfer_by_floppynovice_d7wdns3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05NjAiLCJwYXRoIjoiXC9mXC9jN2I3NTBhMS1jNDg4LTQzZjItYWI0ZS05ZTgyYjVmNGU1NjFcL2Q3d2RuczMtM2U2YmZiZDAtZmYxOS00Y2IzLWI4ZDAtODEwNDJjOTUxNDczLmpwZyIsIndpZHRoIjoiPD03MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QRlaNkaPW3eUNBePp3RjXproEyFAGr-6-Mepe96vn-A"}
                        />
                        <input 
                        onChange={e => setTweetMessage(e.target.value)}

                        value={tweetMessage}
                        placeholder="Whats up?" />                       

                </div>
                      <input  
                      
                      onChange={e => setTweetImage(e.target.value)}
                             value={tweetImage}
                            className="tweetBox__imageInput"
                         placeholder="Enter image url " />

                         
                <Button 
                type="submit"
                onClick={(e) => { console.log('clicked');    sendTweet(e)}}
                variant="outlined" className="tweetBox__tweetButton" >Tweet</Button>
            </form>
            
        </div>
    )
}
