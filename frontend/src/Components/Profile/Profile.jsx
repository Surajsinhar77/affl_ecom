import React from "react";
import img from './Profile.jpeg';

function Profile({userData}){
    return(
        <div className=" p-10 flex flex-col gap-10 text-lg bg-white m-2 h-full">
            <div className=" flex gap-2 items-end">
                <div className=" w-40 h-40 rounded-full overflow-hidden object-cover border">
                    <img src={img} alt="profile image" className=" w-80 h-60 pb-10 object-cover" />
                </div>
                <div className=" text-blue-600 font-semibold">Edit</div>
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" flex gap-4">
                    <div>{userData?.fullName}</div>
                    <div className=" text-blue-600 font-semibold">Edit</div>
                </div>
                <input type="text" value={userData?.fullName} className="w-80 p-2 border rounded-lg"/>
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                    <div>Gender</div>
                </div>
                <div className=" flex gap-3">
                    <div className=" flex gap-1">
                        <input type="radio" />
                        <label htmlFor="">Male</label>
                    </div>
                    <div className=" flex gap-1">
                        <input type="radio" />
                        <label htmlFor="">Female</label>
                    </div>
                    <div className=" flex gap-1">
                        <input type="radio" />
                        <label htmlFor="">Others</label>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                    <div>Email</div>
                    <div className=" text-blue-600 font-semibold">Edit</div>
                </div>
                <input type="text" value={userData?.email} className="w-80 p-2 border rounded-lg" />
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" flex gap-2">
                    <div>Mobile Number</div>
                    <div className=" text-blue-600 font-semibold">Edit</div>
                </div>
                <input type="text" value={"+91 6378137419"}  className="w-80 p-2 border rounded-lg"/>
            </div>
        </div>
    )
}

export default Profile
