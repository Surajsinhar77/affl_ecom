import react from "react";
import { Fragment } from "react";

function ProductDesc(aprops){
    return(
        <>
            <div className="bg-slate-100 p-5 rounded-b-lg">
                <div className="grid grid-cols-3 text-black bg-white border rounded-lg overflow-hidden">
                    {
                        aprops.aprops.map((item, index)=>
                            <Fragment key={index}>
                                <span className="p-2">
                                    {item[1]}
                                </span>
                                <span className="col-span-2 p-2">
                                    {item[2]}
                                </span>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default ProductDesc
