import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/card'
import { Link } from 'react-router-dom';
import apiForAdmin from '../../api/apiForAdmin';
import apiForUpload from '../../api/uploaderApi';

function Service() {

  useEffect(() => {
    apiForAdmin.get('/items/getItems')
    .then((response)=>{
      console.log(response);
      alert(response.data?.message);
    })
    .catch((err)=>{
        console.log(err.message);
    });
  }, []); 

  const arr = [0, 0, 0, 0];

  return (
    <div className='flex flex-row m-auto w-full  text-black mt-5 justify-center'>
      <div className='h-full bg-white w-[23%] mr-2 flex flex-col'>
        <div className=' m-6 text-2xl font-semibold'>
          Filters
        </div>
        <hr className='w-full' />
        <div className=' space-y-4 m-6'>
          <div className=' text-lg font-semibold'>CATOGRIES</div>
          <div className=' text-lg text-gray-600 font-semibold'>&lt; Mobile & Accessories</div>
          <div className=' font-semibold text-lg'>&nbsp; &nbsp;Mobiles</div>
        </div>
        <hr className='w-full' />
        <div className=' m-6'>
          <div className=' text-lg font-semibold'>PRICE</div>
          <div></div>
          <div className=' flex text-lg justify-between'>
            <div className=' border px-2 py-1 w-2/5 flex justify-between items-center'>
              <select className=' w-full'>
                <option value="">Min</option>
                <option value="">10,000</option>
              </select>
            </div>
            <div className=' text-gray-400 p-1'>to</div>
            <div className=' border px-2 py-1 w-2/5 flex justify-between'>
              <select className=' w-full'>
                <option value="">30,000+</option>
                <option value="">20,000</option>
                <option value="">15,000</option>
                <option value="">10,000</option>
              </select>
            </div>
          </div>
        </div>
        <hr className='w-full' />
        <div className=' m-6'>
          <div className=' text-lg font-semibold'>
            <div>OFFERS</div>
            <div></div>
          </div>
        </div>
        <hr className='w-full' />
        <div className=' m-6'>
          <div className=' text-lg font-semibold'>
            <div>CUSTOMER RATING</div>
          </div>
        </div>
        <hr className='w-full' />
        <div className=' m-6'>
          <div className=' text-lg font-semibold flex justify-between'>
            <div>DISCOUNT</div>
          </div>
        </div>
        <hr className='w-full' />
        <div className=' m-6'>
          <div className=' text-lg font-semibold'>
            <div>OFFERS</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-3/4'>
        {
          arr.map((a, index) =>
            <Link to='/product'><ProductCard key={index}/></Link>
          )
        }
      </div>
    </div>
  )
}

export default Service
