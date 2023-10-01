import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './MenuAndNav.css'; // Internal Like Css for NavPage only

function Menubar() {

    const menu = ['Profile', 'Service', 'Blog', 'About', 'Contact']
    const menu2 = ['Profile', 'Service', 'Blog', 'About', 'Contact', "Something ", "More item"]
    const [dw, setDW] = useState(false);

    return (
        <>
            <div className="menubar bg-white w-full h-16 flex text-gray-500">
                <ul className="menuIteams flex w-full justify-around items-center">
                    <li> <Link onMouseEnter={()=>setDW(true)} onMouseLeave={()=>setDW(false)}>Home Accessory</Link> </li> 
                    <li> <Link>Mobile</Link> </li> 
                    <li> <Link>Laptop</Link> </li> 
                    <li> <Link>Fashion</Link> </li> 
                    <li> <Link className='text-justify justify-center flex items-center flex-col'><span>Computer</span>  <span>gadget</span></Link> </li> 
                    <li> <Link>Kitchen Accessory</Link> </li> 
                </ul>
            </div>
            {dw && (
                <div onMouseEnter={()=>setDW(true)} onMouseLeave={()=>setDW(false)} className="dropdown border rounded flex text-gray-600 bg-white p-2 absolute top-44 left-20">
                    <ul>
                        {
                            menu.map((item)=>
                                <li className='m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white'><Link >{item}</Link></li>
                            )
                        }
                    </ul>
                    <ul>
                    {
                            menu2.map((item)=>
                                <li className='m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white'><Link >{item}</Link></li>
                            )
                        }
                    </ul>
                </div>
            )}
        </>
    )
}

export default Menubar