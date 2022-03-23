import React,{useState,useEffect} from 'react';
import{ Container,Paper,Grid,Typography,Box,Link} from '@mui/material';
import {useSelector,useDispatch} from "react-redux";
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis ,CartesianGrid,Legend,Tooltip} from 'recharts';
import {Get}  from "../../Actions";

const Dashboard = () => {


  const dispatch=useDispatch();
  const  { create} =useSelector((state)=>state.post);

  
useEffect(()=>{
  dispatch(Get());

  },[]);


  console.log(create);
  return (
    <>
    <Container     maxWidth="lg"  >
      <Typography style={{marginTop:"100px"}} variant="h5"  textAlign="center">Presentation of Employee's</Typography>

    </Container>
    <ResponsiveContainer   width="100%"   aspect={3}>
    <LineChart   data={create} margin={{top:100}}   >
      <CartesianGrid/>
      <XAxis  dataKey="post"   interval={'preserveStartEnd'} />
      <YAxis  />
      <Tooltip/>
      <Legend/>
    <Line  dataKey="age"   activeDot={{r:9}} />
    <Line  dataKey="name"   activeDot={{r:9}} />
    
    
    </LineChart>
    </ResponsiveContainer>
    </>
        
  )
}

export default Dashboard