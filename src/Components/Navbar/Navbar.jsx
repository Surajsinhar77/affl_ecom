import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="navContainer bg-black flex p-2 m-5 w-4/5 items-center">
                <div className="logoContainer">
                    <h1>LOGO</h1>
                </div>
                <div className='flex w-full justify-end'>
                    <div className="serchBar border border-gray-400">
                        <input type="text" placeholder='Search' className='pl-2 border rounded mr-3'/>
                    </div>
                    <div className="navationtion navItem w-3/5 bg-yellow-400 ">
                        <ul className='flex justify-around w-full'>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/service"> Service </Link></li>
                            <li><Link to="/about"> About </Link></li>
                            <li><Link to="/contact"> Contact </Link></li>
                            <li><Link to="/signin"> SignIn </Link></li>
                            <li><Link to="/signup"> SignUp </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar