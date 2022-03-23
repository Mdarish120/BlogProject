
 import PostMsg from "../models/post.js";
 import mongoose from "mongoose";

export const Create=async (req,res)=>{

    const post =req.body;
    const newPost=new PostMsg({...post});
   try{
          await newPost.save();

          res.status(201).json(newPost);
   }
   catch(e){
       res.status(404).json({message : e.message});
   }
}

export const Get= async (req,res)=>{

    try{
    
        
         const posts=await PostMsg.find().sort({_id:-1})
 
         res.status(200).json({data:posts});
        
     }
     catch(e){
 
         res.status(404).json({message : e.message});
 
     }
}


export const Update= async (req,res)=>{

    
    const {id} = req.params;
    const {name,age,post}=req.body;
    
      if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
      const info={name,age,post,_id:id};
    
       await PostMsg.findByIdAndUpdate(id,info, {new :true});
    
      res.json(info);
   
    

}