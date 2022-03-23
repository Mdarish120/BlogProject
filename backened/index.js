import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";




const app=express();




app.use(bodyParser.json({limit:"30mb" ,extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}));
app.use(cors());

app.use('/',router);





const port =process.env.PORT||5000;
mongoose.connect("mongodb+srv://full_stack123a:stack123a@cluster0.iagxc.mongodb.net/fullStack?retryWrites=true&w=majority")
.then(()=>app.listen(port,()=>console.log(`server connection successfully  on :${port}`)))
.catch((e)=>console.log(e));