import React from "react"
import ProfileNav from "./ProfileNav"
import Profile from "./Profile"
import Favourites from "./Favourites"

function ProfilePage(){
    return(
        <div className=" h-screen flex bg-slate-200 text-black">
            <div className=" h-full p-2 pr-0 w-1/5">
                <div className=" h-full">
                    <ProfileNav/>
                </div>
            </div>
            <div className=" w-4/5 p-2 h-full">
                <div className=" h-full overflow-auto">
                    {/* <Profile/> */}
                    <Favourites/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
