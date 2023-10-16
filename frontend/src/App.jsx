import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routing from './common/Router/Routing';
// import Crousal from './Components/Crousal/Crousal';
import Footer from './Components/Footer/Footer';


import AuthRoute from './common/Router/AuthRoute';

function App() {

  return (
    <>
      <div className='text-blue-400 h-[100vh]'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/auth' element={<AuthRoute/>}/>
            <Route path='/' element={<Routing/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
