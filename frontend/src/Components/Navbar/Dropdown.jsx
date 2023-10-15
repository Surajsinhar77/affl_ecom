import React from "react";
import {Link} from 'react-router-dom';

function Dropdown({setDW}) {
    const menu = ['Profile', 'Service', 'Blog', 'About', 'Contact']
    const menu2 = ['Profile', 'Service', 'Blog', 'About', 'Contact', "Something ", "More item"]
    // console.log(leftP)
    
    return (
        <div
            // style={leftP}
            onMouseEnter={() => setDW(true)}
            onMouseLeave={() => setDW(false)}
            className='dropdown z-50 border rounded flex text-gray-600 bg-white p-2 absolute top-44'
        >
        <ul>
            {menu.map((item) => (
            <li className="m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white">
                <Link>{item}</Link>
            </li>
            ))}
        </ul>
        <ul>
            {menu2.map((item) => (
            <li className="m-1 bg-white-300 p-1 hover:bg-blue-400 hover:text-white">
                <Link>{item}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Dropdown;
