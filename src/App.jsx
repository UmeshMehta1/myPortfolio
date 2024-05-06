import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experiance from './components/Experiance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>

  )
}

export default App