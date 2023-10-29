const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const setUserToken = (userData)=>{
    return jwt.sign(
        {
            _id: userData.name,
            email: userData.email,
        },
        secretkey
    );
}

const getuserToken = (userData)=>{
    
}

module.exports={
    setUserToken,
    getuserToken,
}