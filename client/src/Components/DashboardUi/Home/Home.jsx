import { useState } from "react"
import ProductTable from "../ProductTable/ProductTable"
import api from "../../../api/api"

export default function Home(){
    const [data, setData] = useState({})

    return (
        <div className="ProductList">
        <div className="HeadingProduct">
            <h1 className='text-4xl uppercase font-medium text-center text-gray-600 mb-5'>Members</h1>
        </div>
        <div className="Listing mt-2">
            <ProductTable/>
            {/* <table className='w-full'>
                <tbody className='w-4/5'>
                    <th className='justify-evenly'>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Added Date</td>
                        <td>Delete</td>
                    </th>
                </tbody>
            </table> */}
        </div>
        <div className=" m-5 p-5 rounded-md bg-white flex flex-col gap-2">
            <label>UserName:</label>
            <input type="text" className=" border" onChange={(e)=>{
                setData({...data, "username" : e.target.value})
            }}/>
            <label>Email:</label>
            <input type="email" className=" border" onChange={(e)=>{
                setData({...data, "email" : e.target.value})
            }}/>
            <label>Password:</label>
            <input type="password" className=" border" onChange={(e)=>{
                setData({...data, "password" : e.target.value})
            }}/>
            <label>Role:</label>
            <input type="text" className=" border" onChange={(e)=>{
                setData({...data, "role" : e.target.value})
            }}/>
            <button className=" p-2 px-4 rounded-md bg-slate-400" onClick={()=>{
                apiForAdmin.post('/admin/addNewAdmin', {
                    data:data
                })
                .then((response)=>{
                    console.log(response)
                    alert(response.data.message)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }}>Submit</button>
        </div>
    </div>
)
}
