import React from "react";
import ProductCard from "../ProductCard/card";
import { Link } from "react-router-dom";

function Favourites(){

    const arr = [0,0,0,0,0];

    return(
        <div>
            {
                arr.map((item, index)=>{
                    return <Link to='/product' key={index}><ProductCard/></Link>
                })
            }
        </div>
    )
}

export default Favourites
