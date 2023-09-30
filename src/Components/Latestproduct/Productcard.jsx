import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import {SiV} from 'react-icons/si';
import { Link } from 'react-router-dom';
import ProdcutImage from '../../assets/Img/headphone.jpg'

function Productcard({project}) {
    
    return (
        <div>
            <div className="cardBody  border m-auto bg-white shadow-md rounded-lg overflow-hidden mb-5">
                

                <div className="productImage w-full hover:bg-gray-200 hover:liner">
                    <Link >
                    <img src={ProdcutImage} className="h-72 w-full"  alt="project image" />
                    </Link>
                </div>


                
                <div className="useTech p-3 border-t-2 text-black text-lg flex justify-between">
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