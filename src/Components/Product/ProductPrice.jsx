import React from "react";
import img from './image1.png';
import img2 from './Amazon Offers.png';

function ProductPrice(){
    return(
        <>
            <div className="p-5 mt-5 bg-white border rounded-lg flex">
                <img src={img} alt="product image" className="h-20 w-15" />
                <div className="pl-8">
                    <div>
                        Samsung S21
                    </div>
                    <div className="flex space-x-10 pt-3">
                        <div>Rs. 90,000</div>
                        <img src={img2} alt="img" className="h-10 w-25"/>
                        <button className="px-8 py-1 bg-slate-600 text-white border rounded-lg">Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPrice;
