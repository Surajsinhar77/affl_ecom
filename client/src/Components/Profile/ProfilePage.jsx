import React from "react"
import ProfileNav from "./ProfileNav"
import Profile from "./Profile"
import Favourites from "./Favourites"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import { useState } from "react"

function ProfilePage(){
    const [x, setX] = useState(1);
    return(
        <div className=" h-fit flex bg-slate-200 text-black">
            <div className=" h-screen p-2 pr-0 w-1/5">
                <div className=" h-full">
                    <div className=" flex flex-col gap-5 bg-white text-lg h-full p-5">
                        {/* <div onClick={()=>setX(1)} className=' cursor-pointer'>Profile</div>
                        <div onClick={()=>setX(2)} className=' cursor-pointer'>Favourites</div> */}
                        <Link to=''> Profile </Link>
                        <Link to='favourite'> Favourites </Link>
                        <div>Logout</div>
                    </div>
                </div>
            </div>
            <div className=" w-4/5 p-2 h-full">
                <div className=" h-full">
                    {/* {
                        x==1 ? <Profile/> : <Favourites/>
                    } */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

// userProfile: "/userProfile"