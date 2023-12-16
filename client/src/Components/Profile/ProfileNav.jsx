import React from "react"

function ProfileNav(){
    return(
        <div className=" flex flex-col gap-5 bg-white text-lg h-full p-5">
            <div>Profile</div>
            <div>Favourites</div>
            <div>Wishlist</div>
            <div>Logout</div>
        </div>
    )
}

export default ProfileNav
