import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import {SiV} from 'react-icons/si';
import { Link } from 'react-router-dom';


function Productcard({project}) {
    
    return (
        <div>
            <div className="cardBody  border m-auto bg-white shadow-md rounded-lg overflow-hidden mb-5">
                

                <div className="productImage w-full hover:bg-gray-200 hover:liner">
                    <Link >
                    <img src="/Images/homePage.png" className="h-60" alt="project image" />
                    </Link>
                </div>


                
                <div className="useTech p-3 border-t-2 mt-5 text-black text-lg flex justify-between">
                    <div>
                        <h2>{project.name}</h2>
                        <h2 className='text-red-400'>Rs: <span>200</span></h2>
                    </div>
                    <div>
                        <h2>MOBILE</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcard