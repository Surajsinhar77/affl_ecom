const jwt = require('jsonwebtoken');
// const params = require('../params.json');
const secretkey = params.secretkey;

const setUserToken = (userData)=>{
    return jwt.sign(
        {
            _id: userData.name,
            email: userData.email,
        },
        secretkey
    );
}

const getuserToken = (token)=>{
    if(!token){
        return null;
    }
    return jwt.verify(token, secretkey);
}

module.exports={
    setUserToken,
    getuserToken,
}