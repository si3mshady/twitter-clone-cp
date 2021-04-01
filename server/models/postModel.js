import mongoose from 'mongoose'


const twitterPost = new mongoose.Schema({
    displayName: String,
    username: String,
    verified: Boolean,
    text: String,
    avatar: String,
    image: String

})



export default mongoose.model("twitterPost", twitterPost)



