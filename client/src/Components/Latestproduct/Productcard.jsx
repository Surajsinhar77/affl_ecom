import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import { SiV } from 'react-icons/si';
import ProdcutImage from '../../assets/Img/headphone.jpg'

function Productcard(details) {
    // const {project, image} =  props;
    const { data, filename, contentType } = details.project.ProductPicture.image;

    // Convert the binary data to a base64 string
    const base64String = data.toString('base64');

    // Function to convert Uint8Array to base64
    const uint8ArrayToBase64 = (uint8Array) => {
        let binary = '';
        uint8Array.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return btoa(binary);
    };
    // Construct the data URL for the image
    const imageUrl = `data:${contentType};base64,${uint8ArrayToBase64(details.project.ProductPicture.image.data.data).toString('base64')}`;

    return (
        // <div className=' '>
        //     <div className="cardBody  border m-auto text-xs bg-white shadow-md rounded-lg overflow-hidden mb-5">
        //         <div className="productImage w-full h-80 hover:bg-gray-200 hover:liner flex p-2 justify-center">
        //             <img src={imageUrl} className="object-contain" alt="project image" />
        //         </div>

        //         <div className="useTech p-3 border-t-2 text-black text-sm flex justify-between">
        //             <div>
        //                 <h2>{details.project.productName}</h2>
        //                 <h2 className='text-red-400'>Rs: <span>{details.project.varient.amazonVariant.amazonV1.price}</span></h2>
        //             </div>
        //             <div>
        //                 <h2 className='font-bold text-red-500'># {details.project.productTags}</h2>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="cardBody  border text-xs bg-white shadow-md rounded-lg overflow-hidden mb-5 hover:bg-white lg:m-[2px] transition-all duration-500 hover:m-0">
            <div className="productImage w-fit h-80 hover:liner flex justify-center hover:bg-white">
                <img src={imageUrl} className="object-contain" alt="project image" />
            </div>

            <div className="useTech p-3 border-t-2 text-black text-sm flex justify-between">
                <div>
                    <h2>{details.project.productName}</h2>
                    <h2 className='text-red-400'>Rs: <span>{details.project.varient.amazonVariant.amazonV1.price}</span></h2>
                </div>
                <div>
                    <h2 className='font-bold text-red-500'># {details.project.productTags}</h2>
                </div>
            </div>
        </div>
    )
}

export default Productcard