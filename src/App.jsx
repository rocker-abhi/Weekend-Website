import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Offers from './components/Offers'
import Plan from './components/Plan'
import Rooms from './components/Rooms'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </>
  )
}

export default App
