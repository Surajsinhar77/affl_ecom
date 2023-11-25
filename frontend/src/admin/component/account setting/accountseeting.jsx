import Security from "./security/security"
import Account from "./account/account"
import Anotification from "./notification/notification"

function AccountSetting(){
    return (
        <>
            <div className=" m-5 space-y-5">
                <div className=" flex gap-10 pl-10 border-b pb-3 border-gray-400">
                    <div>
                        Account
                    </div>
                    <div>
                        Security
                    </div>
                    <div>
                        Notification
                    </div>
                </div>
                {/* <Anotification/> */}
                {/* <Security/> */}
                <Account/>
            </div>
        </>
    )
}

export default AccountSetting
