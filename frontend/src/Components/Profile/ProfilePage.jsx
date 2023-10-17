import React from "react"
import ProfileNav from "./ProfileNav"
import Profile from "./Profile"
import Favourites from "./Favourites"

function ProfilePage(){
    return(
        <div className=" h-fit flex bg-slate-200 text-black">
            <div className=" h-screen p-2 pr-0 w-1/5">
                <div className=" h-full">
                    <ProfileNav/>
                </div>
            </div>
            <div className=" w-4/5 p-2 h-full">
                <div className=" h-full">
                    {/* <Profile/> */}
                    <Favourites/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
