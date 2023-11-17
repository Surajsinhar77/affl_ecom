import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

function Security(){
    return(
        <>
            <div className=" m-5 space-y-5">
                <div className=" p-5 py-10 bg-white rounded-lg space-y-5">
                    <div className=" text-2xl font-semibold">
                        Account Details
                    </div>
                    <div className=" grid grid-cols-2 gap-5">
                        <div className=" relative flex flex-col">
                            <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Current Password</label>
                            <input type="text" placeholder="203040" className=" border p-2 rounded-lg text-lg"/>
                        </div>
                        <div></div>
                        <div className=" relative flex flex-col">
                            <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">New Password</label>
                            <input type="text" placeholder="203040" className=" border p-2 rounded-lg text-lg"/>
                        </div>
                        <div className=" relative flex flex-col">
                            <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Confirm Password</label>
                            <input type="text" placeholder="203040" className=" border p-2 rounded-lg text-lg"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            Password Requirements:
                        </div>
                        <div className=" p-5">
                            <ol>
                                <li>Minimum 8 characters long - the more, the better</li>
                                <li>At least one lowercase character</li>
                                <li>At least one number, symbol, or whitespace character</li>
                            </ol>
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
                <div className=" p-5 py-10 bg-white rounded-lg space-y-5">
                    <div className=" text-2xl font-semibold">
                        Two-steps verification
                    </div>
                    <div>
                        Two factor authentication is not enabled yet.<br/>
                        Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more.
                    </div>
                    <div className=" p-2 px-4 bg-blue-700 text-white font-semibold rounded-lg w-fit">
                        ENABLE 2FA
                    </div>
                </div>
                <div className=" p-5 py-10 bg-white rounded-lg space-y-5">
                    <div className=" text-2xl font-semibold">
                        Create an API Key
                    </div>
                    <div className=" relative flex flex-col w-1/2">
                        <label className=" text-sm bg-white relative top-3 w-fit px-2 mx-3">Choose The API Key you want to create</label>
                        <select className=" border p-2 rounded-lg text-lg">
                            <option>Full Control</option>
                            <option>Modify</option>
                            <option>Read Only</option>
                            <option>Read & Write</option>
                        </select>
                    </div>
                    <input type="text" placeholder="203040" className=" border p-2 rounded-lg text-lg w-1/2"/>
                    <div className=" p-2 px-4 bg-blue-700 text-white font-semibold rounded-lg text-center w-1/2">
                        CREATE KEY
                    </div>
                </div>
                <div className=" p-5 py-10 bg-white rounded-lg space-y-5">
                    <div className=" text-2xl font-semibold">
                        API Key List & Access
                    </div>
                    <div>
                        An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
                    </div>
                    <div className=' p-5 rounded-lg bg-gray-100 space-y-3'>
                        <div className=' flex items-center gap-10'>
                            <div className=' text-xl font-semibold'>
                                Server Key 1
                            </div>
                            <div className=' text-sm p-1 px-3 bg-blue-100 text-blue-400'>
                                FULL ACCESS
                            </div>
                        </div>
                        <div>
                            23eaf7f0-f4f7-495e-8b86-fad3261282ac&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <ContentCopyOutlinedIcon/>
                        </div>
                        <div>
                            Created on 28 Apr 2021, 18:20 GTM+4:10
                        </div>
                    </div>
                    <div className=' p-5 rounded-lg bg-gray-100 space-y-3'>
                        <div className=' flex items-center gap-10'>
                            <div className=' text-xl font-semibold'>
                                Server Key 1
                            </div>
                            <div className=' text-sm p-1 px-3 bg-blue-100 text-blue-400'>
                                FULL ACCESS
                            </div>
                        </div>
                        <div>
                            23eaf7f0-f4f7-495e-8b86-fad3261282ac&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <ContentCopyOutlinedIcon/>
                        </div>
                        <div>
                            Created on 28 Apr 2021, 18:20 GTM+4:10
                        </div>
                    </div>
                    <div className=' p-5 rounded-lg bg-gray-100 space-y-3'>
                        <div className=' flex items-center gap-10'>
                            <div className=' text-xl font-semibold'>
                                Server Key 1
                            </div>
                            <div className=' text-sm p-1 px-3 bg-blue-100 text-blue-400'>
                                FULL ACCESS
                            </div>
                        </div>
                        <div>
                            23eaf7f0-f4f7-495e-8b86-fad3261282ac&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <ContentCopyOutlinedIcon/>
                        </div>
                        <div>
                            Created on 28 Apr 2021, 18:20 GTM+4:10
                        </div>
                    </div>
                </div>
                <div className=" p-5 py-10 bg-white rounded-lg space-y-5">
                    <div className=" text-2xl font-semibold">
                        Recent Devices
                    </div>
                </div>
            </div>
        </>
    )
}

export default Security
