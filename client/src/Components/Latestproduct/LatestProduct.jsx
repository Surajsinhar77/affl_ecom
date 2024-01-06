import React, { useState } from 'react'
import Productcard from './Productcard'
import Productdisp from '../Product/Productdisp';
import { Link, Route, Routes  } from 'react-router-dom';
import data from './data.json';
import img1 from './img/IPhone 15 pro.png'
import img2 from './img/Samsung Flip.png'
import img3 from './img/Google Pixel 7a.png'
import img4 from './img/Motorola Edge 40.png'
import img5 from './img/Samsung S22.png'
import img6 from './img/Nothing Phone 2.png'

function LatestProduct({item}) {
    const [data, setData] = useState();

    const img = [img1, img2, img3, img4, img5, img6];
    const ProjectList =[
        {
            name : "e-Commarce VegMarket Store",
            date : [2,"Sep",2023],
            tags : ['next.js', 'react.js', 'node.js','express.js', 'mongodb']
        },

        {
            name : "Hostel Management System",
            date : [10,"Sep",2022],
            tags : ['Bootstrap', 'HTML', 'Javascript','Flask', 'Python', 'MySql']
        },
        {
            name : "StackOver Clone",
            date : [10,"Sep",2022],
            tags : ['react.js', 'node.js','express.js', 'mongodb','Redux']
        },
        {
            name : "StackOver Clone",
            date : [10,"Sep",2022],
            tags : ['react.js', 'node.js','express.js', 'mongodb','Redux']
        },
        {
            name : "StackOver Clone",
            date : [10,"Sep",2022],
            tags : ['react.js', 'node.js','express.js', 'mongodb','Redux']
        },
        {
            name : "StackOver Clone",
            date : [10,"Sep",2022],
            tags : ['react.js', 'node.js','express.js', 'mongodb','Redux']
        },
    ]

    return (
        <div className='flex flex-col justify-center items-center my-40 bg-white mx-40 pb-10'>
            <div className="MainHeaderTopic mt-5 mb-5 w-4/5 bg-white">
                <h1 className='text-4xl p-20 text-center  text-gray-500'>{item.sectionName}</h1>
            </div>
            <div className="latestProducts w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto">
                {
                    data.map((item,index)=>
                        <Link onClick={()=>{setData(item); console.log(data)}} to={`/product/${item.name}`} key={index}><Productcard project={item} image = {img[index]}/></Link>
                    )
                }
                <Routes>
                    <Route path="/product/:productId" element={<Productdisp detail={data}/>} />
                </Routes>
            </div>
        </div>
    )
}

export default LatestProduct