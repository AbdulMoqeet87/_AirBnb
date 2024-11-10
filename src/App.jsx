import React,{ useState } from 'react'
import './App.css'
import SimpleCard from './components/Card'

import CategorySlider from './components/Categories'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
export const context = React.createContext();

function App() {
 
 
  const [cat,setCategory]=useState("");  
  
  return (
      <context.Provider value={[cat,setCategory]}>
      
      <Navbar/>
      <SearchBar/>
      <CategorySlider/>
      <SimpleCard categ={cat}/>
      <Footer/>
      
      </context.Provider>
    )
}  

export default App
