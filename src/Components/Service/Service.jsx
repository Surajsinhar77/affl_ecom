import React from 'react'
import ProductCard from '../ProductCard/card'

function Service() {
  return (
    <div className='flex flex-row m-auto w-full bg-slate-200 text-black'>
      <div className='p-10 h-full bg-slate-400 w-1/5 mr-2'>
        Filter
      </div>
      <ProductCard className='w-4/5'/>
    </div>
  )
}

export default Service