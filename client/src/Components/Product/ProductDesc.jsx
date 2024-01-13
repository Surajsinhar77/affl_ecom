import react from "react";
import { Fragment } from "react";

function ProductDesc(aprops){
    return(
        <>
            <div className="bg-slate-100 p-3 rounded-b-lg">
                <div className="grid grid-cols-3 bg-white border rounded-lg overflow-hidden text-sm p-2 text-gray-600">
                    {
                        aprops.aprops.map((item, index)=>
                            <Fragment key={index}>
                                <span className="p-1 text-sm">
                                    {item[1]}
                                </span>
                                <span className="col-span-2 p-1">
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
