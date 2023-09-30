import { useState } from 'react'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routing from './common/Router/Routing';
// import Crousal from './Components/Crousal/Crousal';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <div className='text-blue-400'>
        <BrowserRouter>
          <Navbar/>
          <Routing/>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
