import React from 'react'
import ProductCard from '../ProductCard/card'

function Service() {
  const arr = [0, 0, 0, 0];
  return (
    <div className='flex flex-row m-auto w-full bg-slate-200 text-black'>
      <div className='p-10 h-full bg-slate-400 w-1/5 mr-2'>
        Filter
      </div>
      <div className='flex flex-col'>
        {
          arr.map((a, index) =>
            <ProductCard key={index} />
          )
        }
      </div>
    </div>
  )
}

export default Service
