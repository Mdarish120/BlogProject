import { makeStyles } from '@mui/styles';

const theme=makeStyles((theme)=>({
 
    blog:{
      
        color:"skyblue",
        "&:hover":{
            color:"blue"
           },
           marginTop:"2px",
           cursor:"pointer"
    },
    menuItem:{
       "&:hover":{
        color:"blue"
       }
    },

    item:{
        "&:hover":{
            color:"blue"
           }
    }

}));


export default theme;