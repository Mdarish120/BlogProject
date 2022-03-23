import {CREATE,UPDATE,GET,START_LOADING, END_LOADING}  from "../Constant";
import axios from "axios";

export  const Create=  (formData)=>async (dispatch)=>{
   
    console.log("create");
    try{
     
       const {data}=await axios.post("http://localhost:5000/post",formData);

     data && dispatch({type:CREATE,payload:data});

    
    }catch(err){
      console.log(err)
     
    }

  

}

export  const Get =  ()=>async (dispatch)=>{

    try{
        dispatch({type:START_LOADING});
        const {data}=await axios.get("http://localhost:5000/get");


    data && dispatch({type:GET,payload:data});
    dispatch({type:END_LOADING});

    }catch(err){
        console.log(err)
    }
    

}

export const Update =({postData,id})=>async(dispatch)=>{

    console.log(postData,id);
 
    try{
       const {data}=await axios.patch(`http://localhost:5000/${id}`,postData);
              console.log(data)
             data&&dispatch({type:UPDATE,payload:data});
    }
catch(err){
    console.log(err)
}
}