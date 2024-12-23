import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage';
import Booking from './Pages/Booking';
import BookingForm from './Pages/ReservationForm';
import Login from './Pages/login';
import Signup from './Pages/Signup';
import { useAuthStore } from './store/useAuthStore';


function App() {
   
const {user}=useAuthStore();

  return (
<>
<Router>
    <Routes>
                  
          <Route path='/' element={user?<Home/>:<Login/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/reservation' element={<BookingForm/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

</Routes>
</Router>
</>
  )
}  

export default App;
