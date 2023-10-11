import React from 'react'
import UserReviews from './UserReviews'
function Review() {
    return (
        <div className='border mt-10 w-4/5 bg-white m-auto'>
            <div className="headingAndSort flex items-center justify-between p-4 bg-slate-100 m-3">
                <h1 className="headingTag4Review text-black text-xl">
                    Displaying review no this
                </h1>
                <span className='flex flex-row items-center'>
                    <label className='mr-2 text-black' htmlFor="SortBy">Sort By :
                    </label>
                    <select className='py-2 px-2 rounded bg-slate-500 text-white' id="reviewSortBy" name="reviews">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                </span>
            </div>
            <div className='border  my-5 p-4 mx-3 grid grid-cols-1 grid-rows-5 gap-3'>
                <UserReviews/>
                <UserReviews/>
                <UserReviews/>
                <UserReviews/>
                <UserReviews/>

            </div>
        </div>
    )
}

export default Review
