const exp = require("constants")

function Profile(){
    return(
        <div>
            <div className=" flex flex-col gap-2 w-1/5 m-2">
                <div>Personal Info</div>
                <div>Favourites</div>
                <div>Wishlist</div>
                <div>Logout</div>
            </div>
            <div></div>
        </div>
    )
}

export default Profile
