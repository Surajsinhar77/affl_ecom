import React, { useCallback, useEffect, useState } from 'react'
import Productcard from './Productcard'
import Productdisp from '../Product/Productdisp';
import api from '../../api/api';
import { Link, Route, Routes  } from 'react-router-dom';

function LatestProduct({item}) {
    const [data, setData] = useState([]);

    function fun(item){
        localStorage.setItem('Product Details', JSON.stringify(item))
        console.log("from LatestProduct :",localStorage.getItem('Product Details'))
    }

      useEffect(()=>{
        api.get('/items/getLatestItems')
        .then((response)=>{
            setData(response.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className='flex flex-col justify-center items-center my-40 bg-white pb-10'>
            <div className="MainHeaderTopic mt-5 mb-5 bg-white w-4/5">
                <h1 className='text-4xl max-md:text-3xl max-sm:text-2xl p-20 text-center  text-gray-500 '>{item.sectionName}</h1>
            </div>
            {/* <hr className='w-full border p'/> */}
            <div className="latestProducts lg:px-9 md:px-6 sm:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    data.map((item,index)=>{
                        return(
                            <Link onClick={()=>fun(item)} to={`/product/${item.productName}`} key={index}><Productcard project={item}/></Link>
                        )}
                    )
                }
                <Routes>
                    <Route path="/product/:productId" element={<Productdisp/>} />
                </Routes>
            </div>
        </div>
    )
}

export default LatestProduct
