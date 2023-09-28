import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Service from '../../Components/Service/Service';
import Contact from '../../Components/Contact/Contact';

import SignIn from '../../Components/Auth/SignIn';
import SignUp from '../../Components/Auth/SignUp';

// **Routiing file extension can not be js it have to be jsx
function Routing() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/service' element={<Service/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/signin' element={<SignIn/>} />
        <Route  path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default Routing;