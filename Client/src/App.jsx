import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage';
import Booking from './Pages/Booking';
import BookingForm from './Pages/ReservationForm';
import { useEffect, useState } from 'react';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import axios from 'axios';
 import { useAuthStore } from './store/useAuthStore';
import Host_Home from './Pages/host_home';


function App() {

const [role,setRole]=useState("");
const {user,setUser}=useAuthStore();
useEffect(() => {
  LogBack();
}, [])

const LogBack=async()=>{
try {
  const token=localStorage.getItem("authToken");
  if(!token)
    return;
  const response= await axios.get("http://localhost:5000/user/auth",{
  headers:{
    Authorization: `Bearer ${token}` 
  }
  
})
console.log("Not back", response);
setUser(response.data.data);
setRole(response.data.data.role);
console.log("role",response.data.data.role);
} catch (error) {
console.log(error.message);
  
}

};
  return (
<>
<Router>
    <Routes>
                  
          <Route path='/' 
          element={
            user?(
            user.role==="user" ?(<Home/>
            ): user.role==="host"? (<Host_Home/>)
            :<Login/>            
          ):(<Login/>)}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/reservation' element={<BookingForm/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/h_home' element={<Host_Home/>}/>

</Routes>
</Router>
</>
  )
}  

export default App;
