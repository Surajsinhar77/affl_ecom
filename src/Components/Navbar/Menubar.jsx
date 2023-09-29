import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './MenuAndNav.css'; // Internal Like Css for NavPage only

function Menubar() {

    const menu = ['Profile', 'Service', 'Blog', 'About', 'contact']
    const [dw, setDW] = useState(false);

    
    return (
        <>
            <div className="menubar bg-white w-full h-16 flex text-gray-500">
                <ul className="menuIteams flex w-full justify-around items-center">
                    <li> <Link>Home Accessory</Link> </li> 
                    <li> <Link>Mobile</Link> </li> 
                    <li> <Link>Laptop</Link> </li> 
                    <li> <Link>Fashion</Link> </li> 
                    <li> <Link className='text-justify justify-center flex items-center flex-col'><span>Computer</span>  <span>gadget</span></Link> </li> 
                    <li> <Link>Kitchen Accessory</Link> </li> 
                </ul>
            </div>

                {/* <div className="dropdown text-gray-800 bg-slate-50 p-2 absolute top-48 left-24">
                    <ul>
                        {
                            menu.map((item)=>
                                <li className='m-3 bg-blue-300 p-2'><Link >{item}</Link></li>
                            )
                        }
                    </ul>
                </div> */}
            
        </>
    )
}

export default Menubar