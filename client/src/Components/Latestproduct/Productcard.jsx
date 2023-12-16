import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import {SiV} from 'react-icons/si';
import { Link } from 'react-router-dom';
import ProdcutImage from '../../assets/Img/headphone.jpg'

function Productcard(props){
    const {project, image} =  props;
    return (
        <div>
            <div className="cardBody  border m-auto bg-white shadow-md rounded-lg overflow-hidden mb-5">
                

                <div className="productImage w-full h-72 hover:bg-gray-200 hover:liner flex justify-center">
                    <Link to='/product'>
                    <img src={image} className=" h-72 w-fit object-cover"  alt="project image" />
                    </Link>
                </div>


                
                <div className="useTech p-3 border-t-2 text-black text-base flex justify-between">
                    <div>
                        <Link to="/product"><h2>{project.name}</h2></Link>
                        <h2 className='text-red-400'>Rs: <span>{project.price}</span></h2>
                    </div>
                    <div>
                        <h2 className='font-bold text-red-500'># {project.tag}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productcard