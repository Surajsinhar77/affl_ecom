import React from "react";
import ProductCard from "../ProductCard/card";

function Favourites(){

    const arr = [0,0,0,0,0];

    return(
        <div>
            {
                arr.map((item, index)=>{
                    return <ProductCard key={index}/>
                })
            }
        </div>
    )
}

export default Favourites
