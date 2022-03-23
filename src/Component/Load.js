import React from 'react';
import {Skeleton,Grid }from '@mui/material';
import useStyle from "./style";



const Load= () => {

  const classes=useStyle();
  return (
    <div  >
      


<Grid  container    sx={{mt:10,mr:7}}   direction="row"   spacing={5} >
          
         
           <Grid   item  xs={12} sm={6} md={4}  lg={3}  >
         <Skeleton    variant="rectangular" animation="wave"  width={220} height={180}    className={classes.root}/>
           </Grid>
      
            </Grid>
         

        </div>
  )
}

export default Load;