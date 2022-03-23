import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

import{ AppBar,Toolbar,Typography,Stack,IconButton,Container,Button,Avatar,Box,Hidden,Menu,MenuItem} from '@mui/material';
import {NavLink} from 'react-router-dom'
import useStyle from "./style";


const NavBar = () => {

    const classes=useStyle();
    const [open,setOpen]=useState();
 
     const handleOpen=(e)=>setOpen(e.currentTarget);
     const handleClose=()=>setOpen(false);
     
         
     
  return (
      <>
      <AppBar   color="grey">
          <Toolbar>
             
           
<Typography  variant="h4"  className={classes.blog} component={Box} display="flex" ml={2}  flexGrow="1">Settyl</Typography>
 
           

              <Hidden  smDown="true">
              <Stack   direction="row" spacing={2}>
                  <Button variant="text"   className={classes.menuItem}  >  <NavLink  style={{textDecoration:"none"}}  to={"/"}>Home</NavLink></Button>
                  <Button variant="text" className={classes.menuItem} ><NavLink  style={{textDecoration:"none"}} to={"/form"} >Add</NavLink></Button>
                  <Button variant="text" className={classes.menuItem}  ><NavLink   style={{textDecoration:"none"}} to={"/dashboard"}>Dashboard</NavLink></Button>
             
              </Stack>
        </Hidden>
        <Hidden  smUp="true">
        <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon   onClick={handleOpen}    />
          </IconButton>
        </Hidden>
            
            <Menu open={Boolean(open)}   anchorEl={open}   onClose={handleClose}>
                <MenuItem> <Button  variant="text"  onClick={handleClose} className={classes.item}> <NavLink style={{textDecoration:"none"}}  to={"/"}>Home</NavLink></Button></MenuItem>
                <MenuItem> <Button variant="text" onClick={handleClose}  className={classes.item}><NavLink  style={{textDecoration:"none"}} to={"/form"} >Add</NavLink></Button></MenuItem>
                <MenuItem> <Button variant="text" onClick={handleClose}  className={classes.item}><NavLink   style={{textDecoration:"none"}} to={"/dashboard"}>Dashboard</NavLink></Button></MenuItem>
            </Menu>
   

          </Toolbar>
      </AppBar>
      </>
 
  )
}

export default NavBar