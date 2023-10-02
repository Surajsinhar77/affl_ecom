import React from "react";
import img from './image1.png';
import img2 from './Amazon Offers.png';

function ProductPrice(){
    return(
        <>
            <div className="p-2 mt-5 bg-white border rounded-lg flex w-full">
                <img src={img} alt="product image" className="h-20 w-15" />
                <div className="pl-8 w-full">
                    <div>
                        Samsung S21
                    </div>
                    <div className="flex justify-between pt-3 w-full">
                        <div className="text- text-sm">Rs. 90,000</div>
                        <img src={img2} alt="img" className="h-18 w-20"/>
                        <button className="px-4 py-1 bg-slate-600 text-white border text-sm rounded-lg">Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPrice;
