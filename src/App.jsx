import { useState } from 'react'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Routing from './common/Router/Routing';
import Crousal from './Components/Crousal/Crousal';

function App() {

  return (
    <>
      <div className='text-blue-400'>
        <BrowserRouter>
          <Navbar/>
          <Routing/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
