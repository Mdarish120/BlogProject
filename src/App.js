import React,{useState,useEffect} from 'react';
import NavBar from "./Component/NavBar/NavBar";
import Form from "./Component/Form/Form";
import Home from "./Component/Home/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"


const App = () => {


  const [data,setData]=useState([]);
  const [updatedData,setUpdatedData]=useState(null);


  const updating=(id)=>{
    console.log("print")



 
   const result=data.find(e=>e._id==id);
   console.log(result);

setUpdatedData(result);

  

      
  }

 


  return (
    <>
       
   
    <Router>
    <NavBar/>
      <Routes>
        <Route   exact  path="/"   element={<Home  updating={updating}  setData={setData}   data={data}/>}/> 
        <Route   exact  path="/form"   element={<Form    data={data}   setUpdatedData={setUpdatedData} updatedData={updatedData}/>}/> 
        <Route   exact  path="/dashboard"   element={<Dashboard/>}/> 
      </Routes>
    </Router>
    </>
 
  )
}

export default App