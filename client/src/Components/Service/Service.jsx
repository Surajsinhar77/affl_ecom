import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/card'
import Productdisp from '../Product/Productdisp';
import { Link, Route, Routes  } from 'react-router-dom';
import apiForAdmin from '../../api/apiForAdmin';

function Service() {

  const [data, setData] = useState([])
  const [details, setDetails] = useState(null);

  function fun(item){
    localStorage.setItem('Product Details', JSON.stringify(item))
    console.log(localStorage.getItem('Product Details'))
  }

  useEffect(() => {
    apiForAdmin.get('/dashboard/getItems')
    .then((response)=>{
      setData(response.data.data);
      // alert(response.data?.message);
    })
    .catch((err)=>{
        console.log(err.message);
    });
  }, []); 

  return (

    <div className='flex flex-row m-auto w-full  text-black mt-5 justify-center'>
      <div className='h-full bg-white w-[23%] mr-2 flex flex-col'>
        <div className=' m-6 text-2xl font-semibold'>
          Filters
        </div>
        <hr className='w-full' />productName
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
          data?.map((item, index) =>
              <Link onClick={()=>fun(item)} to={`/product/${item.productName}`} key={index}><ProductCard detail={item}/></Link>
          )
        }
          <Routes>
            <Route path="product/:productId" element={<Productdisp detail={details}/>} />
          </Routes>
      </div>
    </div>
  )
}

export default Service
