import React, { useCallback, useEffect, useState } from 'react'
import Productcard from './Productcard'
import Productdisp from '../Product/Productdisp';
import api from '../../api/api';
import { Link, Route, Routes  } from 'react-router-dom';

function LatestProduct({item}) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        api.get('/items/getLatestItems')
        .then((response)=>{
            setData(response.data.data)
            // alert(response.data.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className='flex flex-col justify-center lg:m-10 md:m-6 sm:m-2 bg-white lg:pb-9 md:pb-6 sm:pb-3 rounded-lg'>
            <div className="MainHeaderTopic lg:py-8 md:py-4 sm:py-2 bg-white">
                <h1 className='lg:text-4xl md:text-2xl sm:text-lg text-center text-gray-500'>{item.sectionName}</h1>
            </div>
            {/* <hr className='w-full border p'/> */}
            <div className="latestProducts lg:px-9 md:px-6 sm:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    data.map((item,index)=>
                        <Link to={`/product/${item.name}`} key={index}><Productcard project={item}/></Link>
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
