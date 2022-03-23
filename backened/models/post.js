import mongoose from "mongoose";

const postScheme=mongoose.Schema({
  
name:String,
age:Number,
post:String,


});


const PostMsg= mongoose.model('PostMsg', postScheme);

export default PostMsg;