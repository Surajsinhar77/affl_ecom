import React from 'react'
import img from './img.png'
import img1 from './img1.png'

function Service() {
  return (
    <div className='flex flex-row m-auto w-full bg-blue-300 text-black'>
      <div className='p-10 h-[200px] bg-slate-200 w-1/5'>
        Filter
      </div>
      <div className='flex bg-gray-50 w-4/5 flex-row justify-between'>
        <div className='flex px-5 pb-10 py-2'>
          <img src={img} alt="product image" className='w-[240px] h-[240px]'/>
          <div className='text-gray-400 text-2xl'>♥</div>
        </div>
        <div className='p-5 w-fit'>
          <div className='mt-2 px-1 font-semibold border text-sm rounded-md text-white bg-blue-700 w-fit'># Gaming</div>
          <div className='text-2xl font-normal'>Samsung S21</div>
          <div className='flex'>
            <div className='mr-3 text-sm bg-green-700 text-white border rounded-md py-0 px-1'>★4.3</div>
            <div className='text-slate-500 text-sm font-semibold'>405 ratings and 58 reviews</div>
          </div>
          <div className='text-sm'>
            <ul className=''>
              <li>• 8 GB RAM | 128 GB ROM</li>
              <li>• 15.49 cm (6.1 inch) Full HD+ Display</li>
              <li>• 50MP + 12MP + 10MP | 10MP Front Camera</li>
              <li>• 3700 mAh Lithium-ion Battery</li>
              <li>• Snapdragon 8 Gen 1 Processor</li>
              <li>• 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories</li>
            </ul>
          </div>
        </div>
        <div className='p-5 mr-8 w-fit'>
          <div className='flex flex-row'>
            <div className='text-sm font-semibold pr-2'>Rs.90,000</div>
            <img src={img1} alt="flipkart assured" className='w-20 mt-1 h-4'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service