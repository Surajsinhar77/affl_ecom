import React from "react"
import { Link } from "react-router-dom"
import { Routes, Route, Outlet } from "react-router-dom"

function ProfileNav(){
    return(
        <div className=" flex flex-col gap-5 bg-white text-lg h-full p-5">
            <div><Link to='profile/userProfile'>Profile</Link></div>
            <div><Link to='profile/favourites'>Favourites</Link></div>
            {/* <div><Link to='/wishlist'>Wishlist</Link></div> */}
            <div><Link to='/'>Logout</Link></div>
        </div>
)
}

export default ProfileNav
