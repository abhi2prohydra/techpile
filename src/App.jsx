import React from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Training from './Components/Training'
import Web from './Components/Web'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Details from './Components/Details'

function App() {
  
  return (
    
    <>
   <div className="container-fluid ">
    <Details/>
    <Header/>
    <Slider/>
    <Training/>
    <Web/>
    <Cards/>
    <Footer/>
    </div>
    </>
  )
}

export default App