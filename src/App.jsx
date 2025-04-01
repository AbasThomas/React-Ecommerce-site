import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Category from '../Pages/Category/Category'
import './App.css'
import Hero from '../Pages/Hero/Hero'
const App = () => {
  return (
    <div>
        <Navbar/>
      <div className="heroSection">
        <Category/>
        {/* <Hero/> */}
      </div>
    </div>
  )
}

export default App