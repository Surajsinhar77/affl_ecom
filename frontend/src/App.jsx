import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home/Home';
import MainPage from './MainPage';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Productdisp from './Components/Product/Productdisp';
import Profile from './Components/Profile/Profile';
import { useAuth } from './common/AuthContext';
import Login from './Components/DashboardUi/Home/Auth/Login';

function App() {
  const {userData} = useAuth();

  return (
    <>
      <div className=' h-[100vh]'>
        <BrowserRouter>
          <Routes>
            <Route  path='/signup' element={<SignUp/>} />
            <Route  path='/admin' element={<Login/>} />
            <Route path={`/Profile/${userData?.fullName}`} element={<Profile userData={userData?.fullName} />} />
            <Route  path='/signin' element={<SignIn/>} />
            <Route path='/' element={<MainPage/>} >
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='service' element={<Service/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='product' element={<Productdisp/>} />
            </Route>
          </Routes>
          <Outlet/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
