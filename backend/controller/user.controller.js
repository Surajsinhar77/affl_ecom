const userModel = require('../model/user.model');

const userRegister = async (req, res)=>{
    const {name, email, password, } = req.body;
    const getAllUserEmail = await userModel.find({email:userData.email});
    
}

module.exports = {
    userRegister,
}