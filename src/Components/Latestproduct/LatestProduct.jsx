import React from 'react'
import Productcard from './Productcard'

function LatestProduct({item}) {

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
                    ProjectList.map((item,index)=>
                        <Productcard key={index} project={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default LatestProduct