import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/card'
import Productdisp from '../Product/Productdisp';
import { Link, Route, Routes  } from 'react-router-dom';
import api from '../../api/api';

function Service() {

  const [data, setData] = useState([])
  const [details, setDetails] = useState(null)
  const [filters, setFilters] = useState({
    'min-price' : 5000,
    'max-price' : 30000,
    'rating' : 0,
    'discount' : 0,
    'brands' : [],
    'tags' : []
  })
  const [value, setValue] = useState();

  function f(e){
    console.log(e.target.name, e.target.value)
    let check=true
    const arr=filters[e.target.name].map((item)=>{
      if(item!=e.target.value){
        return item
      }else{
        check=false
        return null
      }
    })
    console.log("check: ", check)
    if(check){
      arr.unshift(e.target.value)
    }
    setFilters({...filters, [e.target.name]:arr})
    console.log(e.target.name, arr)
    console.log(filters);
  }

  function fun(item){
    localStorage.setItem('Product Details', JSON.stringify(item))
    // console.log("This Service Page : ",localStorage.getItem('Product Details'))
  }

  useEffect(() => {
    api.get('/items/getItems')
    .then((response)=>{
      setData(response.data.data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  }, [setData]); 

  return (
    <div className='flex lg:flex-row m-auto w-full  text-black mt-5 justify-center flex-col'>
      <div className=' w-full h-fit lg:w-1/4'>
        <div className='bg-white mr-2 flex flex-col'>
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
                <select className=' w-full' name='min-price' onChange={(e)=>{setFilters({...filters, [e.target.name] : e.target.value}); console.log(filters)}}>
                  <option value="5000">5,000</option>
                  <option value="10000">10,000</option>
                  <option value="15000">15,000</option>
                  <option value="20000">20,000</option>
                </select>
              </div>
              <div className=' text-gray-400 p-1'>to</div>
              <div className=' border px-2 py-1 w-2/5 flex justify-between'>
                <select className=' w-full' name='max-price' onChange={(e)=>{setFilters({...filters, [e.target.name] : e.target.value}); console.log(filters)}}>
                  <option value='30000' >30,000</option>
                  <option value="20000">20,000</option>
                  <option value="15000">15,000</option>
                  <option value="10000">10,000</option>
                </select>
              </div>
            </div>
          </div>
          <hr className='w-full' />
          <div className=' m-6'>
            <div className=' text-lg font-semibold'>
              <div>CUSTOMER RATING</div>
            </div>
            <div className=' border px-2 py-1 flex justify-between'>
              <select className=' w-full p-1' name='rating' onChange={(e)=>{setFilters({...filters, [e.target.name] : e.target.value}); console.log(filters)}}>
                <option value="4">★4 +</option>
                <option value="3">★3 +</option>
                <option value="2">★2 +</option>
                <option value="1">★1 +</option>
                <option value="0">All</option>
              </select>
            </div>
          </div>
          <hr className='w-full' />
          <div className=' m-6'>
            <div className=' text-lg font-semibold flex justify-between'>
              <div>DISCOUNT</div>
            </div>
            <div className=' border px-2 py-1 flex justify-between'>
              <select className=' w-full p-1' name='discount' onChange={(e)=>{setFilters({...filters, [e.target.name] : e.target.value}); console.log(filters)}}>
                <option value="50">50% +</option>
                <option value="40">40% +</option>
                <option value="30">30% +</option>
                <option value="20">20% +</option>
                <option value="10">10% +</option>
                <option value="0">All</option>
              </select>
            </div>
          </div>
          <hr className='w-full' />
          <div className=' m-6'>
            <div className=' text-lg font-semibold'>
              <div>BRANDS</div>
            </div>
            <div className=' border px-2 py-1 flex flex-col justify-between'>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="brands"/>
                  <label>Samsung</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="brands"/>
                  <label>Realme</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="brands"/>
                  <label>iQoo</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="brands"/>
                  <label>Mi</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="brands"/>
                  <label>Motorola</label>
                </div>
            </div>
          </div>
          <hr className='w-full' />
          <div className=' m-6'>
            <div className=' text-lg font-semibold'>
              <div>TAGS</div>
            </div>
            <div className=' border px-2 py-1 flex flex-col justify-between'>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="tags" value="Gaming" onChange={(e)=>f(e)}/>
                  <label>Gaming</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="tags" value="Battery" onChange={(e)=>f(e)}/>
                  <label>Battery</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="tags" value="Camera" onChange={(e)=>f(e)}/>
                  <label>Camera</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="tags" value="Display" onChange={(e)=>f(e)}/>
                  <label>Display</label>
                </div>
                <div className='flex gap-1 p-1'>
                  <input type="checkbox" name="tags" value="Over All" onChange={(e)=>f(e)}/>
                  <label>Over All</label>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:w-3/4 w-full max-sm:m-auto my-2'>
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