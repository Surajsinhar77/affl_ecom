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
import ProfilePage from './Components/Profile/ProfilePage';
import Profile from './Components/Profile/Profile';
import { useAuth } from './common/AuthContext';
import Login from './Components/DashboardUi/Home/Auth/Login';
import Dashboard from './Components/DashboardUi/Home/Dashboard';
import AddProductForm from './Components/DashboardUi/Forms/AddProductForm';
import ManageInventory from './Components/DashboardUi/Manage Inventory/manageInventory';
import Favourites from './Components/Profile/Favourites';
import AdminHome from './Components/DashboardUi/Home/Home';
//Page not found
import PageNotFound from './Components/Home/PageNotFound';

function App() {
  const {
    userData, 
    AdminLoginFunction,
    adminLogIn,
  } = useAuth();

  return (
    <>
      <div className=' h-[100vh]'>
        <BrowserRouter>
          <Routes>
          
          {/* This is the admin login system Start */}
            {(adminLogIn)?
                <>
                  <Route path='/admin/dashboard/' element={<Dashboard/>} >
                    <Route index element={<AdminHome/>}/>
                    <Route path='additems' element={<AddProductForm/>} />
                    <Route path='manageInventory' element={<ManageInventory/>} />
                  </Route>
                </>
                :
                <>
                  <Route  path='/admin/login' element={<Login/>} />
                  <Route path="*" element={<PageNotFound/>} />
                </>
            }
          {/* This is the admin login system End */}


            <Route  path='/signup' element={<SignUp/>} />
            {/* <Route path="*" element={<PageNotFound/>} /> */}
            <Route path={`/Profile/${userData?.fullName}`} element={<Profile userData={userData?.fullName} />} />

            <Route  path='/signin' element={<SignIn/>} />
              <Route path='/' element={<MainPage/>} >
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='service' element={<Service/>} />
              <Route path='contact' element={<Contact/>} />
              <Route path='product/:id' element={<Productdisp/>} />
              <Route path='profile/' element={<ProfilePage/>} >
                <Route index element={<Profile/>} />
                <Route path='favourite' element={<Favourites/>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
