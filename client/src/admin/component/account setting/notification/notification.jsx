
function Anotification(){
    return (
        <>
            <div className=" bg-white py-10 rounded-lg">
                <div className=" px-10 pt-5 space-y-5">
                    <div>
                        Recent Devices
                    </div>
                    <div>
                        We need permission from your browser to show notifications. Request Permission
                    </div>
                </div>
                <table className=" w-full">
                    <tr className=" h-12 border-b font-semibold">
                        <td className=" px-10 w-1/2">Type</td>
                        <td>Email</td>
                        <td>Browser</td>
                        <td className=" pr-3">App</td>
                    </tr>
                    <tr className=" h-12 border-b ">
                        <td className=" px-10 w-1/2">New for you</td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr className=" h-12 border-b ">
                        <td className=" px-10 w-1/2">Account activity</td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr className=" h-12 border-b ">
                        <td className=" px-10 w-1/2">A new browser used to sign in</td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr className=" h-12 border-b ">
                        <td className=" px-10 w-1/2">A new device is linked</td>
                        <td><input type="checkbox"/></td>
                        <td><input type="checkbox"/></td>
                        <td className=" pr"><input type="checkbox"/></td>
                    </tr>
                </table>
                <div className=" px-10 pt-5 space-y-5">
                    <div>
                        When should we send you notifications?
                    </div>
                    <div>
                        <select className=" p-2 border rounded-lg w-1/3">
                            <option>Only when I&#39;m online</option>
                            <option>Anytime</option>
                        </select>
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
        </>
    )
}

export default Anotification
