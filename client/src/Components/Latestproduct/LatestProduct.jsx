import React, { useEffect, useState } from 'react'
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
            alert(response.data.message)
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
            <div className="latestProducts w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto object-cover">
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