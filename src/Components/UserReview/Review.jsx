import React from 'react'

function Review() {
    return (
        <div className=' border p-10 text-black rounded-md'>
            <div className=' flex justify-between'>
                <div className=' flex w-fit justify-center items-center'>
                    <div className=' text-3xl font-semibold text-center h-fit'>Ratings And Review</div>
                </div>
                <div className=' p-4 border text-xl shadow-md rounded-md'>Rate Product</div>
            </div>
            <div className=' flex justify-around w-full'>
                <div className=' flex flex-col items-center justify-around w-1/3 p-10'>
                    <div className=' text-[40px] font-semibold'>4.5★</div>
                    <div className=' text-xl text-gray-700'>405 ratings and 58 reviews</div>
                </div>
                <div className=' w-2/3 flex flex-col items-center p-4 gap-3 text-lg'>
                    <div className=' flex w-full gap-2 align-middle'>
                        <div>5★</div>
                        <div className=' w-full h-full flex items-center justify-center'>
                            <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                        </div>
                        <div>265</div>
                    </div>
                    <div className=' flex w-full gap-2 align-middle'>
                        <div>4★</div>
                        <div className=' w-full h-full flex items-center justify-center'>
                            <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                        </div>
                        <div>123</div>
                    </div>
                    <div className=' flex w-full gap-2 align-middle'>
                        <div>3★</div>
                        <div className=' w-full h-full flex items-center justify-center'>
                            <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                        </div>
                        <div>87</div>
                    </div>
                    <div className=' flex w-full gap-2 align-middle'>
                        <div>2★</div>
                        <div className=' w-full h-full flex items-center justify-center'>
                            <div className=' w-full h-1 align-middle bg-orange-700 rounded-lg'></div>
                        </div>
                        <div>39</div>
                    </div>
                    <div className=' flex w-full gap-2 align-middle'>
                        <div>1★</div>
                        <div className=' w-full h-full flex items-center justify-center'>
                            <div className=' w-full h-1 align-middle bg-red-700 rounded-lg'></div>
                        </div>
                        <div>82</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
