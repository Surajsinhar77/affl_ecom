import React from "react";
import img from './img.png'
import img1 from './img1.png'

function ProductCard({ detail }) {

    const { data, filename, contentType, x } = detail.ProductPicture.image;
    const base64String = data.toString('base64');
    const uint8ArrayToBase64 = (uint8Array) => {
        let binary = '';
        uint8Array.forEach((byte) => {
            binary += String.fromCharCode(byte);
        });
        return btoa(binary);
    };
    // Construct the data URL for the image
    const imageUrl = `data:${contentType};base64,${uint8ArrayToBase64(detail.ProductPicture.image.data.data).toString('base64')}`;

    return (
        <>
            <div className='flex bg-white flex-row justify-between max-sm:flex-col mb-5 rounded'>
                <div className='flex px-5 pb-10 py-2 items-center max-lg:m-auto'>
                    <img src={imageUrl} loading="lazy" alt={`Product: ${filename}`} className='w-[240px] h-[240px] object-contain' />
                    {/* <div className='text-gray-400 text-2xl'>♥</div> */}
                </div>
                <div className="flex max-lg:flex-col">
                    <div className='p-5 w-fit'>
                        <div className=''>
                            <h1 className="mt-2 px-2 py-1 font-semibold  text-sm rounded-md text-white bg-blue-700 w-fit"># {detail.productTags}</h1>
                        </div>
                        <div className='text-2xl font-normal'>{detail.productName}</div>
                        <div className='flex'>
                            <div className='mr-3 text-sm bg-green-700 text-white border rounded-md py-0 px-1'>★4.3</div>
                            <div className='text-slate-500 text-sm font-semibold'></div>
                        </div>
                        <div className='text-sm'>
                            <ul className=''>
                                <li>• {detail.productSpecs.productSpecRam} RAM | {detail.productSpecs.productSpecStorage} ROM</li>
                                <li>• {detail.productSpecs.productSpecDisplay}</li>
                                <li>• {detail.productSpecs.productSpecRearCamera} | {detail.productSpecs.productSpecFrontCamera} Front Camera</li>
                                <li>• {detail.productSpecs.productSpecBatteryCap} Lithium-ion Battery</li>
                                <li>• {detail.productSpecs.productSpecProcessor} Processor</li>
                                <li>• 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories</li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-5 mr-8 w-fit'>
                        <div className='flex relative flex-row max-lg:flex-col'>
                            <div className='text-2xl font-semibold pr-2'>&#8377;{detail.varient.flipkartVarient.flipkartV1.price}</div>
                            <img src={img1} alt="flipkart assured" className='w-20 mt-1 h-6 relative right-0' />
                        </div>
                        <div className='text-slate-500 font-semibold'><del>&#8377;85,000</del> 5.55% off</div>
                        <div className='text-sm'>Free Delivery</div>
                        <div className='text-sm text-green-600 font-semibold'>save extra with combo offers</div>
                        <div className='text-xs'>upto &#8377;30,000 off on exchange</div>
                    </div>
                </div>
            </div>
            <hr className=" w-full" />
        </>
    )
}

export default ProductCard
