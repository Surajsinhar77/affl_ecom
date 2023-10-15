import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routing from './common/Router/Routing';
// import Crousal from './Components/Crousal/Crousal';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home/Home';
import MainPage from './mainPage';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Productdisp from './Components/Product/Productdisp';

import AuthRoute from './common/Router/AuthRoute';

function App() {

  return (
    <>
      <div className='text-blue-400 h-[100vh]'>
        <BrowserRouter>
          <Routes>
            <Route  path='/signup' element={<SignUp/>} />
            <Route  path='/signin' element={<SignIn/>} />
          </Routes>
          <Navbar/>
          <Routes>
              <Route  path='/' element={<Home/>} />
              <Route  path='/about' element={<About/>} />
              <Route  path='/service' element={<Service/>} />
              <Route  path='/contact' element={<Contact/>} />
              <Route  path='/product' element={<Productdisp/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
