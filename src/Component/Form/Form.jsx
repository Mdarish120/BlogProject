import React ,{useState,useEffect} from "react";
import{ Paper,Typography,Box,TextField,Button,Container} from '@mui/material';
import { useDispatch ,useSelector} from "react-redux";
import {Create}  from "../../Actions";
import {Update}  from "../../Actions";
import {useNavigate} from 'react-router-dom'

const Form=({data,updatedData,setUpdatedData})=>{

  const  dispatch=useDispatch();
  const Navigate=useNavigate();

    const [postData,setPostData]=useState({name:'',age:'',post:''});
   
  

    const handleData=(e)=>{

        e.preventDefault();
        
      var id=updatedData?._id;




     if(updatedData){
        console.log("updating ")
    dispatch(Update({postData,id}));
    setUpdatedData(null);
    }else{
        dispatch(Create(postData));
    }
     Navigate("/");
 
      
           
    
 
    
    }

  //  console.log(updatedData);

    useEffect(()=>{
        console.log("update")
        const run = async ()=>{
            setPostData({name:updatedData?.name,age:updatedData?.age,post:updatedData?.post});
           
           
        }

        run();
     
        },[updatedData]);
        
  //  console.log(postData);
    
    return(
        <>
       <Container   maxWidth="xs">
       <Paper   component={Box}  width="270px"  p={3}  mt={14}  elevation={10}>
               <form   onSubmit={handleData}>
               <Typography>    {updatedData ? "Updating" :"Creating Blog" }</Typography>
               <TextField
              
                label="Employee's  Name"
                    required
                type="text"
                    onChange={e=>setPostData({...postData,name:e.target.value})}
                    sx={{ml:1,mt:2}}
                  fullWidth="true"
                value={postData.name}
        />  
        <TextField
                
                label="Age"
                    required

                    onChange={e=>setPostData({...postData,age:e.target.value})}
                    sx={{ml:1,mt:2}}
                  fullWidth="true"
                  value={postData.age}
        />  
           <TextField
  
                label="Post"
                    required

                    onChange={e=>setPostData({...postData,post:e.target.value})}
                    sx={{ml:1,mt:2,mb:2}}
                  fullWidth="true"
                  value={postData.post}
        />  

        <Button variant="contained"  type="submit" >Send</Button>
        </form>
               
           </Paper>
       </Container>
          
     
        </>
    )
}

export default Form;