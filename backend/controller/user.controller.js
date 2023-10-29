const userModel = require('../model/user.model');
const bcrypt = require('bcrypt')
const serviceAuth = require('../service/auth');

const userRegister = async (req, res)=>{
    const {name, email, password } = req.body;

    try{
        const isUserExist = await userModel.findOne({email});
        if(!isUserExist){
            return res.status(409).json({message:"User Already Exist", userExist: true});
        }

        const hashPassword =  await bcrypt.hash(password, 10);

        const token = serviceAuth.setUserToken({name,email});
        const user = new userModel({
            fullname : name,
            email, email,
            password, hashPassword,
            token : token
        })

        const result = await user.save();
        res.cookie("uid",token);
        return res.json({message: "User is sucessfull login", result});
    }catch(err){
        return res.json(err);
    }
}

module.exports = {
    userRegister,
}