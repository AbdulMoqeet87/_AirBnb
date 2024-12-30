import React,{ useState } from 'react'
import '../App.css'

import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import DropDown from '../components/DropDown';

export const context = React.createContext();

function Host_Home() {
 
 
  const [cat,setCategory]=useState("");  
  
  return (
      
      <>
            <Navbar/>     
            <Footer/> 
      </>
    )
}  

export default Host_Home
