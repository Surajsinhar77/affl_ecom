function Account(){
    return(
        <>
            <div className="">
                <div className=" m-5 bg-white rounded-lg">
                    <div className=" p-10 space-y-10">
                        <div className=" text-2xl font-semibold">
                            Account Details
                        </div>
                        <div className=" flex space-x-6">
                            <div className=" w-24 h-24 rounded-lg bg-gray-600">
                                <img/>
                            </div>
                            <div className=" flex flex-col justify-between p-2">
                                <div className=" space-x-4 flex">
                                    <div className=" p-2 px-4 bg-blue-700 text-white font-semibold rounded-lg">
                                        UPLOAD NEW PHOTO
                                    </div>
                                    <div className=" p-2 px-4 bg-red-700 text-white font-semibold rounded-lg">
                                        RESET
                                    </div>
                                </div>
                                <div className=" font-semibold">
                                    Allowed JPG, GIF or PNG. Max size of 800K
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr/>

                    <div className=" p-10 space-y-10">
                        <div className=" grid grid-cols-2 gap-5">
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">First ame</label>
                                <input type="text" placeholder="Divanshu" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Last Name</label>
                                <input type="text" placeholder="Gupta" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">E-mail</label>
                                <input type="text" placeholder="example@xyz.com" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Organization</label>
                                <input type="text" placeholder="AFFL" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Phone Number</label>
                                <input type="text" placeholder="+91 000 000 0000" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Address</label>
                                <input type="text" placeholder="Building No., Street Name, City" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">State</label>
                                <input type="text" placeholder="Rajasthan" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Zip Code</label>
                                <input type="text" placeholder="203040" className=" border p-2 rounded-lg text-lg"/>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Country</label>
                                <select className=" border p-2 rounded-lg text-lg" placeholder="India">
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>Germany</option>
                                </select>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Language</label>
                                <select className=" border p-2 rounded-lg text-lg">
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>German</option>
                                    <option>Spanish</option>
                                </select>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Timezone</label>
                                <select className=" border p-2 rounded-lg text-lg">
                                    <option>Timezone 1</option>
                                    <option>Timezone 2</option>
                                    <option>Timezone 3</option>
                                    <option>Timezone 4</option>
                                </select>
                            </div>
                            <div className=" relative flex flex-col">
                                <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Currency</label>
                                <select className=" border p-2 rounded-lg text-lg">
                                    <option>Rupee</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className=" flex gap-6">
                            <div className=" p-2 px-4 bg-blue-700 text-white font-semibold rounded-lg">
                                SAVE CHANGES
                            </div>
                            <div className=" p-2 px-4 bg-gray-400 text-white font-semibold rounded-lg">
                                RESET
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" m-5 bg-white rounded-lg p-10 space-y-5">
                    <div>
                        Deactivate Account
                    </div>
                    <div className=" space-x-4">
                        <input type="checkbox" className=""/>
                        <label>I want to deactivate my account</label>
                    </div>
                    <div className=" p-2 px-4 bg-red-700 text-white font-semibold rounded-lg w-fit">
                        DEACTIVATE
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
