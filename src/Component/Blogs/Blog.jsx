import React ,{useEffect,useState} from "react";
import{ Container,Paper,Grid,Typography,Box,Link,Stack,Tooltip} from '@mui/material';
import  useStyle from "./style";
import Skeletons from "../Load";
import {useSelector}   from "react-redux";
import {Get}  from "../../Actions";
import { useDispatch } from "react-redux";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useNavigate} from "react-router-dom";


const Blog=({updating,setData,data})=>{
    const  dispatch=useDispatch();

const Navigate=useNavigate();


  
const  { create,isLoading} =useSelector((state)=>state.post);

setData(create);

useEffect(()=>{
    dispatch(Get());
 

    },[]);


    const classes=useStyle();


    const handle=(id)=>{

        console.log(id);
        updating(id);
    Navigate("/form");
    }    
console.log(isLoading);
console.log(data);
  
    return(
        <>


        {isLoading? ( <Grid  container      sx={{mt:10,mr:7}}   direction="row"   spacing={5} className={classes.container}>
           {data?.map(({name,age,post, _id})=>(
           <Grid   item  xs={12} sm={6} md={4}  lg={3}  >
           <Paper   component={Box}  p={4}   elevation={4}  width={220}   height={160} >
               <Stack  direction="row"   spacing={2}>
               <div>
               <Typography variant="h5"   mb={2}  >Name : {name}</Typography>
               <Typography  variant="h5"  mb={2} >Age : {age}</Typography>
               <Typography   variant="h5">Post : {post}</Typography>
               </div>
               <Tooltip  title="Update">

               <MoreHorizIcon    style={{marginRight:10}}    onClick={()=>handle(_id)}/>
               </Tooltip>
             
              
               </Stack>
             
           </Paper>
           </Grid>
           ))}


       </Grid>) :(

<>
           <Stack   direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}   marginLeft={4}>
               <Skeletons/>  <Skeletons/> <Skeletons/><Skeletons/>
           </Stack>
           <Stack   direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}  marginLeft={4}>
               <Skeletons/>  <Skeletons/> <Skeletons/><Skeletons/>
           </Stack>
           <Stack   direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}  marginLeft={4}>
               <Skeletons/>  <Skeletons/> <Skeletons/><Skeletons/>
           </Stack>
           

           </>
       )}

      


        </>
    )
}

export default Blog;