import React from 'react'
import Crousal from '../Crousal/Crousal';
import LatestProduct from '../Latestproduct/LatestProduct';

function Home() {

  const mainproductSection = [
    {
      sectionName : "Latest launch Product",
    },
    {
      sectionName : "Most Selling Product",
    },
    {
      sectionName : "Most Discount Product",
    },
    
  ]

  return (
    <div>
      <Crousal/>
      {
        mainproductSection.map((item, index)=>
          <LatestProduct key={index} item={item}/>
        )
      }
    </div>
  )
}

export default Home