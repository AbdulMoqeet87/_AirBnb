
import './App.css'
import SimpleCard from './components/Card'

import CategorySlider from './components/Categories'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

function App() {
  return (
      <>
      <Navbar/>
      <SearchBar/>
      <CategorySlider/>
      <SimpleCard/>
      <Footer/>
      </>
    )
}  

export default App
