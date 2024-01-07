import React, { Fragment, useEffect } from 'react'
import { Link, Outlet, useNavigate, Route, Routes } from 'react-router-dom';
import { BiLogoMediumOld, BiUser } from "react-icons/bi";
// import Menubar from './Menubar';
import { useAuth } from '../../common/AuthContext';
// import Dropdown from './Dropdown';
import { useState } from 'react';
import api from '../../api/api';
import Productdisp from '../Product/Productdisp';



function Navbar() {
    const { userData } = useAuth();
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    const [dw, setDW] = useState(false);

    const logoutFunction = () => {
        logout();
        navigate('/signin');
    }


    const menu = ['Setting', 'Blog', 'About']
    const menu2 = ['profile', 'Service', 'Blog', 'About']

    const [sugg, setSugg] = useState([]);
    const [searchValue, setValue] = useState("");
    const [vis, setVis] = useState(false);

    useEffect(() => {
        api.get('/items/getData?' + new URLSearchParams({ data: searchValue }).toString())
            .then((response) => {
                console.log(response.data.data)
                setSugg(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [searchValue]);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    <Routes>
        <Route path="product/:productId" element={<Productdisp />} />
    </Routes>

    return (
        <div className='flex flex-col justify-center items-center rounded-lg'>
            <div className="navContainer bg-white flex p-6 m-5 w-4/5 items-center max-sm:flex-col">
                <div className="logoContainer">
                    <h1> <BiLogoMediumOld className='text-4xl text-red-500' /> </h1>
                </div>
                <div className='flex max-lg:flex-col w-full max-lg:h-auto max-md:h-auto max-md:py-2 max-lg:justify-evenly max-lg:px-5 max-lg:rounded max-lg:gap-3'>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>


                    <div className="navationtion navItem w-3/5 max-lg:w-full mr-5 md:flex items-center text-gray-700 hidden">
                        <div className='flex justify-around w-full items-center max-md:flex-col max-lg:items-start' >
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to=""> Home </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="service"> Smartphone </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="contact"> Contact </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="about"> About </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="profile"> Profile </Link>
                        </div>
                    </div>

                    <div id="mobile-menu" className={`md:hidden mt-2 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                        <div className='flex justify-around w-full items-center max-md:flex-col max-lg:items-start' >
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to=""> Home </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="service"> Smartphone </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="contact"> Contact </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="about"> About </Link>
                            <Link className='max-lg:px-1 max-lg:text-lg mx-1' to="profile"> Profile </Link>
                        </div>
                    </div>
                    <div className="serchBar w-3/5 max-lg:w-full flex">
                        <div className='w-3/5 max-lg:w-full h-10'>
                            <input type="text" placeholder='Search' className='focus:border border rounded p-2 w-full' onChange={(e) => setValue(e.target.value)}
                                value={searchValue} onFocus={() => setVis(true)} onBlur={() => setVis(false)} />
                            <div className={` relative bg-slate-300 border border-black z-20 ${vis ? "visible" : "hidden"}`}>
                                <ul className='px-1'>
                                    {
                                        sugg.map((item, index) =>
                                            <Fragment key={index}>
                                                <li
                                                    className='py-2 border'
                                                    onClick={() => setValue(item.productName)}>{item.productName}</li>
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
                            isLoggedIn ?
                                <>
                                    <li className='border-2 rounded-full flex items-center px-2 py-2 mr-3 cursor-pointer hover:border-red-500'
                                        onMouseEnter={() => setDW(true)} onMouseLeave={() => setDW(false)}
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
                                <div className='flex max-sm:flex-row max-lg:flex-col'>
                                    <li><Link to="/signin"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md max-lg:mb-1 max-sm:mb-0'>SignIn</button> </Link></li>
                                    <li><Link to="/signup"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md max-lg:mt-1 max-sm:mt-0'>SignUp</button> </Link></li>
                                </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar


// block 1 code from here 
{/* <div className="serchBar w-3/5 max-lg:w-full flex">
                        <div className='w-3/5 max-lg:w-full h-10'>
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
                    </div> */}


// Block 2 code from here 
