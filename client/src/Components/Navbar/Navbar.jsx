import React, { Fragment, useEffect } from 'react'
import { Link, Outlet, useNavigate, Route, Routes } from 'react-router-dom';
import { BiLogoMediumOld,BiUser } from "react-icons/bi";
// import Menubar from './Menubar';
import { useAuth } from '../../common/AuthContext';
// import Dropdown from './Dropdown';
import { useState } from 'react';
import apiForAdmin from '../../api/apiForAdmin';
import Productdisp from '../Product/Productdisp';



function Navbar() {
    const {userData} = useAuth();
    const  navigate  = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    const [dw, setDW] = useState(false);

    // console.log("This is the User Data ", userData);

    const logoutFunction = () =>{
        logout();
        navigate('/signin');
    }


    const menu = ['Setting', 'Blog', 'About']
    const menu2 = ['profile', 'Service', 'Blog', 'About']

    const [sugg, setSugg] = useState([]);
    const [searchValue, setValue] = useState("");
    const [vis, setVis] = useState(false);

    // useEffect(() => {
    //     apiForAdmin.get('/dashboard/getData?'+new URLSearchParams({data:searchValue}).toString())
    //     .then((response) => {
    //         console.log(response.data.data)
    //         setSugg(response.data.data)
    //         // alert(response.data.message)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }, [searchValue]);
    <Routes>
    <Route path="product/:productId" element={<Productdisp/>} />
  </Routes>

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="navContainer bg-white flex p-6 m-5 w-4/5 items-center">
                <div className="logoContainer">
                    <h1> <BiLogoMediumOld className='text-4xl text-red-500'/> </h1>
                </div>
                <div className='flex w-full '>
                    <div className="navationtion navItem w-3/5 mr-5 flex items-center text-gray-700">
                        <div className='flex justify-around w-full items-center'>
                            <Link to=""> Home </Link>
                            <Link to="service"> Smartphone </Link>
                            <Link to="contact"> Contact </Link>
                            <Link to="about"> About </Link>
                            <Link to="profile"> Profile </Link>
                        </div>
                    </div>
                    <div className="serchBar w-3/5 flex">
                        <div className=' w-3/5 h-10'>
                            <input type="text" placeholder='Search' className='focus:border border rounded p-2 w-full' onChange={(e) => setValue(e.target.value)}
                            value={searchValue} onFocus={()=>setVis(true)} onBlur={()=>setVis(false)}/>
                            <div className={` relative bg-slate-300 border border-black z-20 ${vis?"visible":"hidden"}`}>
                                <ul className='px-1'>
                                    {
                                        sugg.map((item, index) => 
                                            <Fragment key={index}>
                                                <li  
                                                className='py-2 border'
                                                onClick={()=>setValue(item.productName)}>{item.productName}</li>
                                            </Fragment>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                            <Link to={`/product/${searchValue}`}>
                                <button className='border rounded py-2 px-3 ml-3 border-gray-600 hover:border-green-700 hover:text-gray-600'>Search</button>
                            </Link>
                    </div>
                </div>
                
                <div>
                    <ul className='flex'>
                        {
                            isLoggedIn? 
                                <>  
                                    <li className='border-2 rounded-full flex items-center px-2 py-2 mr-3 cursor-pointer hover:border-red-500'
                                        onMouseEnter={()=>setDW(true)} onMouseLeave={()=>setDW(false)}
                                    >   
                                        <BiUser className='text-3xl' />
                                        {dw && (
                                            <div
                                            onMouseEnter={() => setDW(true)}
                                            onMouseLeave={() => setDW(false)}
                                            className='dropdown z-50 border rounded flex text-white bg-gray-500 p-2 absolute top-20'
                                        >
                                        <ul>
                                            <li className="m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white">
                                                <Link to={`/Profile/${userData?.fullName}`}> {userData?.fullName} </Link>
                                            </li>
                                            {menu.map((item, index) => (
                                                <li key={index} className="m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white">
                                                    <Link to={`/${item}`}> {item} </Link>
                                                </li>
                                                ))}
                                        </ul>
                                        <ul>
                                            {menu2.map((item, index) => (
                                            <li key={index} className="m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white">
                                                <Link to={`/${item}`}> {item} </Link>
                                            </li>
                                            ))}
                                        </ul>
                                        </div>
                                        )}
                                    </li>
                                    <li><Link onClick={logoutFunction}> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md'>Logout</button> </Link></li>
                                </>
                            :
                                <>
                                    <li><Link to="/signin"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md'>SignIn</button> </Link></li>
                                    <li><Link to="/signup"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md'>SignUp</button> </Link></li>
                                </>
                        }
                        
                    </ul>
                </div>
            </div>
            {/* <Menubar/> */}
        </div>
    )
}

export default Navbar