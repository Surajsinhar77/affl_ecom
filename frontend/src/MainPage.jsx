import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Productdisp from './Components/Product/Productdisp';

function MainPage() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/about' element={<About/>} />
            <Route  path='/service' element={<Service/>} />
            <Route  path='/contact' element={<Contact/>} />
            <Route  path='/product' element={<Productdisp/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default MainPage;
