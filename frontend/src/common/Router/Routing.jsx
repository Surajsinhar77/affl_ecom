import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Service from '../../Components/Service/Service';
import Contact from '../../Components/Contact/Contact';

import Productdisp from '../../Components/Product/Productdisp';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

// **Routiing file extension can not be js it have to be jsx
function Routing() {
  return (
    <>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/service' element={<Service/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/product' element={<Productdisp/>} />
    </>
  )
}

export default Routing;
