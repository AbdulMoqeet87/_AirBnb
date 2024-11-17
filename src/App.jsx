import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage';
import Booking from './Pages/Booking';



function App() {
   
  return (
<>
<Router>
    <Routes>
                  
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
</Routes>
</Router>
</>
  )
}  

export default App;
