import React from "react";
import ProductCard from "../ProductCard/card";
import { Link } from "react-router-dom";

function Favourites(){

    const arr = [1, 2, 3, 4, 5];

    return(
        <div>
        {
            arr.map((item, index)=>
                <div key={index}>Product {item}</div>
            )
        }
        </div>
    )
}

export default Favourites
