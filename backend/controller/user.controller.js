const userModel = require('../model/user.model');

const userRegister = async (req, res)=>{
    const userData = req.body;
    const getAllUserEmail = await userModel.find({email:userData.email});
    // return res.json({"message ": "Test api "})
}

module.exports = {
    userRegister,
}