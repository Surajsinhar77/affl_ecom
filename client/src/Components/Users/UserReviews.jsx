import React from 'react'
import { BiSolidLike, BiSolidDislike, BiSolidStar } from 'react-icons/bi';
import {BsFillReplyFill} from 'react-icons/bs';

function UserReviews() {
    const rating = [1, 1, 1, 1, 1];
    return (
        <div className='userReview mainContainer bg-blue-50 px-5 py-3'>
            <div className="reviewTitle  and-user-rating-col flex items-center justify-between">
                <div className="reviewTitle font-medium text-black text-lg">
                    <h1>Iphone 14 pro max review</h1>
                </div>
                <div className="ratingDiv flex text-xl">
                    {
                        rating.map((item, index) =>
                            <span key={index} className='text-red-600'>
                                <BiSolidStar />
                            </span>
                        )
                    }
                </div>
            </div>

            <div className="userName date-and-plateform text-gray-700">
                <h1>
                    <span>Vikash Singh</span>
                    <span> &nbsp;(Dec 19 2022)</span>
                    <span> on Flipkart</span>
                </h1>
            </div>
            <div className="reviewContent text-gray-700">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nemo repellendus sequi natus esse cum.</p>
            </div>
            <div className="helpFullreview text-gray-500 flex flex-row items-center mt-2">
                <p className=''>Is this review helpfull?
                </p>
                <span className=' pl-2 text-lg flex'>
                    <button className='mx-2 flex'><BiSolidLike className='text-xl hover:text-blue-500' /> &nbsp; {1} </button>
                    <button className='mx-2 flex'><BiSolidDislike className='text-xl hover:text-red-500' /> &nbsp; {2} </button>
                </span>
                <div className="replySection flex items-center text-blue-600 ml-10 hover:underline cursor-pointer hover:text-gray-400">
                    <BsFillReplyFill className='text-2xl'/>
                    <button>Reply</button>
                </div>
            </div>
            {/* <div className='w-auto h-[2px] bg-gray-300 rounded mt-4'></div> */}
        </div>
    )
}

export default UserReviews