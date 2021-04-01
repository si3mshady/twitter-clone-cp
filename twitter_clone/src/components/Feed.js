import React, {useState, useEffect} from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import '../css/Feed.css'
import Axios from 'axios'
import FlipMove from 'react'
export default function Feed() {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPosts] = useState({})

    useEffect(() => {
        const url = "http://localhost:9000/v1/twitter/posts"
        
        Axios.get(url).then(post => { 
            
            console.log(post);
            setPosts(post.data)} )
        // create database model 
    },[posts, newPost])
    return (
        <div className='feed'>
            <div className='feed__header'>
               <h2>Home</h2>

            </div>


            <TweetBox  setNewPosts={setNewPosts}/>

            {/* <Post image={"https://media.giphy.com/media/3o85xqVLppgAS6QKCk/giphy.gif"} />
            <Post image={"https://media.giphy.com/media/npxXYT77DaRji/giphy.gif"}/>
            <Post image={"https://media.giphy.com/media/uwe7ZdeLXmXrmOkmjk/giphy.gif"} />
            <Post image={'https://media.giphy.com/media/oGAEB84cPZBf2/giphy.gif'}/> */}
      
            {posts.map( data => (

                <Post displayName={data.displayName}
                key={data.text}
                userName={data.username}
                verified={data.verified}
                timestamp
                text = {data.text}
                image={data.image}
                avatar={data.avatar} />
                

            ) )}
        
     

            {/* TweetBox */} 
            
            {/* Post */}
            
        </div>  
    )
}


// MERN baby mern 