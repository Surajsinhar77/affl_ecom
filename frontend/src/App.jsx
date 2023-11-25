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
import Sidebar from './admin/component/sidebar/sidebar';
import AHome from './admin/component/Main Page/page';
import Aheader from './admin/component/header/header';
import Afooter from './admin/component/footer/footer';
import Account from './admin/component/account setting/account/account';
import Security from './admin/component/account setting/security/security';
import Anotification from './admin/component/account setting/notification/notification';
import AccountSetting from './admin/component/account setting/accountseeting';

function App() {
  return (
    <>
      <div className=' h-[100vh]'>
        {/* <BrowserRouter>
          <Routes>
            <Route  path='/signup' element={<SignUp/>} />
            <Route  path='/signin' element={<SignIn/>} />
            <Route path='/' element={<MainPage/>}>
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='service' element={<Service/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='product' element={<Productdisp/>} />
            </Route>
          </Routes>
          <Outlet/>
        </BrowserRouter> */}
        <div className=' flex h-full w-full'>
          <Sidebar className=' h-full'/>
          <div className=' w-5/6 h-full overflow-auto'>
            <Aheader />
            <AHome />
            {/* <Account/> */}
            {/* <Security/> */}
            {/* <Anotification/> */}
            {/* <AccountSetting/> */}
            <Afooter/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
