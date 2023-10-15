import React from 'react'
import SignUp from '../../Components/Auth/SignUp';
import SignIn from '../../Components/Auth/SignIn';

import { Route,Routes } from 'react-router-dom';
function AuthRoute() {
  return (
    <>
      <Routes>
          <Route  path='/auth/signup' element={<SignUp/>} />
          <Route  path='/auth/signin' element={<SignIn/>} />
          
      </Routes>
    </>
  )
}

export default AuthRoute
