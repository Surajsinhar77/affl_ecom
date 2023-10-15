import React, {useState} from 'react'

function UserRating() {
    const [c3, setC3] = useState(false);
    const [s, setS] = useState([true,true,true,true,true]);
    const [rating, setRating] = useState(0);

    return (
        <div className='my-7'>
            <div className=' border p-10 text-black rounded-md space-y-2'>
                <div className=' flex justify-between'>
                    <div className=' flex w-fit justify-center items-center'>
                        <div className=' text-xl font-semibold text-center h-fit'>Ratings And Review</div>
                    </div>
                    <div className={`${c3 ? "visible" : "hidden"} cursor-pointer px-10 py-5 border text-lg font-semibold shadow-md rounded-md`} onClick={() => { setC3(false); setS([true, true, true, true, true]) }}>Rate Product</div>
                    <div className={`${c3 ? "hidden" : "visible"} cursor-pointer px-4 py-3 border text-lg font-semibold shadow-md rounded-md`} onClick={() => setC3(true)}>Submit</div>
                </div>
                <div className={`flex justify-around w-full ${c3 ? "visible" : "hidden"}`}>
                    <div className=' flex flex-col items-center justify-around w-1/3 p-10'>
                        <div className=' text-[40px] font-semibold'>4.5★</div>
                        <div className=' text-xl text-gray-700'>405 ratings and 58 reviews</div>
                    </div>
                    <div className=' w-1/3 flex flex-col items-center p-4 gap-3 text-sm'>
                        <div className=' flex w-full align-middle'>
                            <div>5★</div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                            </div>
                            <div>265</div>
                        </div>
                        <div className=' flex w-full  align-middle'>
                            <div>4★</div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                            </div>
                            <div>123</div>
                        </div>
                        <div className=' flex w-full  align-middle'>
                            <div>3★</div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <div className=' w-full h-1 align-middle bg-green-700 rounded-lg'></div>
                            </div>
                            <div>87</div>
                        </div>
                        <div className=' flex w-full  align-middle'>
                            <div>2★</div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <div className=' w-full h-1 align-middle bg-orange-700 rounded-lg'></div>
                            </div>
                            <div>39</div>
                        </div>
                        <div className=' flex w-full  align-middle'>
                            <div>1★</div>
                            <div className=' w-full h-full flex items-center justify-center'>
                                <div className=' w-full h-1 align-middle bg-red-700 rounded-lg'></div>
                            </div>
                            <div>82</div>
                        </div>
                    </div>
                </div>
                <div className={` text-blue-700 flex p-10 justify-around ${c3 ? "hidden" : "visible"}`}>
                    <div id='s1' className=' cursor-pointer text-[100px]' onClick={() => { setS([false, true, true, true, true]); setRating(1) }}>
                        {s[0] ? <div>&#9734;</div> : <div>&#9733;</div>}
                    </div>
                    <div id='s2' className=' cursor-pointer text-[100px]' onClick={() => { setS([false, false, true, true, true]); setRating(2) }}>
                        {s[1] ? <div>&#9734;</div> : <div>&#9733;</div>}
                    </div>
                    <div id='s3' className=' cursor-pointer text-[100px]' onClick={() => { setS([false, false, false, true, true]); setRating(3) }}>
                        {s[2] ? <div>&#9734;</div> : <div>&#9733;</div>}
                    </div>
                    <div id='s4' className=' cursor-pointer text-[100px]' onClick={() => { setS([false, false, false, false, true]); setRating(4) }}>
                        {s[3] ? <div>&#9734;</div> : <div>&#9733;</div>}
                    </div>
                    <div id='s5' className=' cursor-pointer text-[100px]' onClick={() => { setS([false, false, false, false, false]); setRating(5) }}>
                        {s[4] ? <div>&#9734;</div> : <div>&#9733;</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRating