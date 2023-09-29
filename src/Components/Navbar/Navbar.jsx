import React from 'react'
import {Link} from 'react-router-dom';
import { BiLogoMediumOld } from "react-icons/bi";
import Menubar from './Menubar';

function Navbar() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="navContainer bg-white flex p-6 m-5 w-4/5 items-center">
                <div className="logoContainer">
                    <h1> <BiLogoMediumOld className='text-4xl'/> </h1>
                </div>
                <div className='flex w-full '>
                    <div className="navationtion navItem w-3/5 mr-5 flex items-center text-gray-700">
                        <ul className='flex justify-around w-full items-center'>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/service"> Service </Link></li>
                            <li><Link to="/about"> About </Link></li>
                            <li><Link to="/contact"> Contact </Link></li>
                        </ul>
                    </div>
                    <div className="serchBar w-4/5">
                        <input type="text" placeholder='Search' className='focus:border border rounded p-2 w-4/5'/>
                    </div>
                </div>

                <div>
                    <ul className='flex'>
                        <li><Link to="/signin"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md'>SignIn</button> </Link></li>
                        <li><Link to="/signup"> <button className='bg-gray-700 px-6 py-3 mr-2 rounded text-white text-md'>SignUp</button> </Link></li>
                    </ul>
                </div>
            </div>
            <Menubar/>
        </div>
    )
}

export default Navbar