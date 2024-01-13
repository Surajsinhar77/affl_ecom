import React, { useState, useEffect } from "react"
import apiForAdmin from "../../../api/apiForAdmin";
import { Button, Card, Typography } from "@material-tailwind/react";

export default function ManageInventory(){
    const [data, setData] = useState([]);
    const [deleteFdunctionCall, setDeleteFdunctionCall] = useState(true);
    const tableHead = ["S. No.", "Product Category", "Product Name", "Product Tag", "Action"]

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
    }, [deleteFdunctionCall]);

    function deleteItem(id){
        console.log("id of item: ", id)
        apiForAdmin.delete(`/dashboard/deleteItem`, {
            headers:{
                'Custom' : `${id}`
            }
        })
        .then((response)=>{
            console.log(response.data)
            setDeleteFdunctionCall(!deleteFdunctionCall)
        })
        .catch((err)=>{
            console.log(err)
            setDeleteFdunctionCall(!deleteFdunctionCall)
        })
    }

    return (
        <div className=" flex flex-col items-center justify-center p-10 rounded-lg shadow-sm">
            <div className=" text-3xl pb-10">
                Manage Inventory
            </div>
            <div className=" rounded-md border bg-white w-full">
                <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {tableHead.map((item, index) => (
                            <th
                                key={index}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {item}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                    <tbody>
                        {
                            data.map((item, index)=>{
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                return(
                                <tr key={index} id={item._id}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {index+1}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.category}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.productName}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.productTags}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            <button className=" py-1 px-4 text-sm font-semibold border-[1px] border-purple-600 text-purple-600 rounded-md shadow-md" onClick={()=>deleteItem(item._id)}>Delete</button>
                                        </Typography>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
