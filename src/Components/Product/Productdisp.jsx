import React from 'react'
import imag1 from '../../assets/Img/headphone.jpg'
import { BsDisplay } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsBatteryCharging } from "react-icons/bs";
import { BsMemory } from "react-icons/bs";
import { BiMemoryCard } from "react-icons/bi";
import { PiAndroidLogoLight } from "react-icons/pi";

import Productiondetail from './Productiondetail';

function Productdisp() {

    const specs = [
        {
            specsName: "Display",
            iconname: <BsDisplay className='text-4xl' />,
            detail: "6.72-inch <br/> (2400x1080)",
        },
        {
            specsName: "Processor",
            iconname: <GiProcessor className='text-4xl' />,
            detail: "MediaTex Dimensity 6100+",
        },
        {
            specsName: "Front Camera",
            iconname: <AiOutlineCamera className='text-4xl' />,
            detail: "8mp",
        },
        {
            specsName: "Rear Camera",
            iconname: <AiOutlineCamera className='text-4xl' />,
            detail: "64mp + 2mp",
        },
        {
            specsName: "Battery Capacity",
            iconname: <BsBatteryCharging className='text-4xl' />,
            detail: "5000mAh",
        },
        {
            specsName: "Ram",
            iconname: <BsMemory className='text-4xl' />,
            detail: "4GB, 6GB",
        },
        {
            specsName: "Storage",
            iconname: <BiMemoryCard className='text-4xl' />,
            detail: "128GB",
        },
        {
            specsName: "Os",
            iconname: <PiAndroidLogoLight className='text-4xl' />,
            detail: "Android 13",
        },

    ]
    return (
        <>
            <div className='mt-7 '>
                <div className="productDetail w-4/5 bg-white m-auto p-5 flex ">
                    <div className="productImageSection flex w-2/5">
                        {/* image Section section */}
                        <div className="imageSelection flex flex-col w-fit">
                            <div className="images p-2 border mb-2">
                                <img className='w-15 h-20' src={imag1} alt="image of product 1" />
                            </div>
                            <div className="images p-2 border mb-2">
                                <img className='w-15 h-20' src={imag1} alt="image of product 2" />
                            </div>
                        </div>

                        <div className="mainProductImage ml-4">
                            <img className='h-96 rounded' src={imag1} alt="" />
                        </div>
                    </div>


                    <div className="productInformation ml-10 w-3/5">

                        <div className="headingPart">
                            <h1 className='text-gray-700 m-3 text-xl'>Key Specs</h1>
                            <div className='px-2 pt-2  border bg-gray-200 rounded-3xl'>
                                <div className="keySpecsCardDetail text-gray-500 bg-white  border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto p-5 rounded-3xl">

                                {/* Dynamic Spes using Array of map Start */}
                                    {
                                        specs.map((item) =>
                                            <div className='Specs flex'>
                                                <div className='specsLogo '>
                                                    {item.iconname}
                                                </div>
                                                <div className='ml-2'>
                                                    <h4 className=''>{item.specsName}</h4>
                                                    <p className='flex flex-col'><span>6.72-inch</span> <span>(2400x1080)</span> </p>
                                                </div>
                                            </div>
                                        )
                                    }

                                {/* Dynamic Spes using Array of map End */}

                                </div>
                                <div>
                                    <div className='text-center text-gray-500 flex  justify-evenly m-1'>
                                        <div>
                                            <div className='flex flex-col '>
                                                <span className='text-gray-500 text-sm'>Market Status</span>
                                                <span className='text-base text-gray-800'>Released</span>
                                            </div>
                                        </div>
                                        <div className='h-7 w-0.5 bg-gray-400 m-2'></div>
                                        <div>
                                        <div className='flex flex-col '> 
                                            <span className='text-gray-500 text-sm'>Release Date</span>
                                            <span className='text-base text-gray-800'>6th Sep 2023</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {/* Production Detail Start from here  */}
                        <Productiondetail/>
                        {/* Production Detail End from here  */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdisp