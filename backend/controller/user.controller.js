const userModel = require('../model/user.model');

const userRegister = async (req, res)=>{
    const userData = req.body;
    const getAllUserEmail = await userModel.find({email:userData.email});
    // const {name, email, password, } = req.body;

    
}

module.exports = {
    userRegister,
}