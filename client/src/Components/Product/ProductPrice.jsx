import React from "react";
import img from './image1.png';
import img2 from './Amazon Offers.png';

function ProductPrice({ image, productName, detail }) {
    return (
        <>
            <div className="p-2 mt-5 bg-white border rounded-lg flex w-full">
                <img src={image} alt="product image" className="h-20 w-auto" />
                <div className="pl-8 w-full">
                    <div>
                        {productName}
                    </div>
                    <div className="flex justify-between pt-3 w-full">
                        <div className="text-sm font-bold">{detail.price}</div>
                        <img src={img2} alt="img" className="h-7 w-auto object-cover" />
                        <button className="px-5 py-2 bg-slate-600 text-white border text-xs"><a href={detail.productLink} target="_blank">Buy</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPrice;
