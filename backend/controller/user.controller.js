const userModel = require('../model/user.model');

const userRegister = (req, res)=>{
    return res.json({"message ": "Test api "})
}

module.exports = {
    userRegister,
}