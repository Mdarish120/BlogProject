import React from "react";
import{ Container,Paper,Grid,Typography,Box,Link} from '@mui/material';

import Blog from "../Blogs/Blog"
import Form from "../Form/Form";

const Home=({updating,setData,data})=>{
    return(
        <>
     <Container  maxWidth="xl" >
       <Blog     updating={updating}    setData={setData}  data={data}/>


     </Container>
        </>
    )
}

export default Home;