
import Login from "../src/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Signup from "./SignUp";

//import Serives from '../components/Servicee';

const Routing = () => {
  return (
    <Routes>
      <Route path='/Home' element={<Navbar/>} />
     <Route path='/' element={<Signup/>}/>
      <Route path="/Login" element={<Login/>} />
    
   
    </Routes>
  );
};

export default Routing;
