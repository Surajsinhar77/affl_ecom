import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './MenuAndNav.css'; // Internal Like Css for NavPage only

function Menubar() {

    const [dw, setDW] = useState(false);
    const [dw1, setDW1] = useState(false);
    const [dw2, setDW2] = useState(false);
    const [dw3, setDW3] = useState(false);
    const [dw4, setDW4] = useState(false);
    const [dw5, setDW5] = useState(false);

    return (
        <>
            <div className="menubar bg-white w-full h-16 flex text-gray-500">
                <ul className="menuIteams flex w-full justify-around items-center">
                    <li> <Link onMouseEnter={()=>setDW(true)} onMouseLeave={()=>setDW(false)}>Home Accessory</Link> 
                    {dw && (
                        <Dropdown setDW={setDW} />
                    )}
                    </li> 

                    
                    <li> <Link onMouseEnter={()=>setDW1(true)} onMouseLeave={()=>setDW1(false)}>Mobile</Link> 
                        {dw1 && (
                            <Dropdown setDW={setDW1} />
                        )}
                    </li> 

                    <li> <Link onMouseEnter={()=>setDW2(true)} onMouseLeave={()=>setDW2(false)}>Laptop</Link> 
                        {dw2 && (
                            <Dropdown setDW={setDW2} />
                        )}
                    </li> 

                    <li> <Link onMouseEnter={()=>setDW3(true)} onMouseLeave={()=>setDW3(false)}>Fashion</Link> 
                        {dw3 && (
                            <Dropdown setDW={setDW3} />
                        )}
                    </li> 

                    <li> <Link className='text-justify justify-center flex items-center flex-col' 
                        onMouseEnter={()=>setDW4(true)} onMouseLeave={()=>setDW4(false)}
                        ><span>Computer</span>  <span>gadget</span></Link> 
                        {dw4 && (
                            <Dropdown setDW={setDW4} />
                        )}
                    </li> 

                    <li onMouseEnter={()=>setDW5(true)} onMouseLeave={()=>setDW5(false)}> <Link>Kitchen Accessory</Link> 
                    {dw5 && (
                            <Dropdown setDW={setDW5} />
                    )}
                    </li> 
                </ul>
            </div>
            
        </>
    )
}

export default Menubar