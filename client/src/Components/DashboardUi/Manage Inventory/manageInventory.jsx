import React, { useState, useEffect } from "react"
import apiForAdmin from "../../../api/apiForAdmin";

export default function ManageInventory(){
    const [data, setData] = useState([]);

    useEffect(() => {
        apiForAdmin.get('/dashboard/getData?'+new URLSearchParams({}).toString())
        .then((response) => {
            console.log(response.data.data)
            setData(response.data.data)
            // alert(response.data.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <div className=" flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-sm">
            <div className=" text-3xl pb-10">
                Manage Inventory
            </div>
            <div>
                {
                    data.map((item, index)=>
                        <div>hdb</div>
                    )
                }
            </div>
        </div>
    )
}
