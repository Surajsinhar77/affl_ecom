const {userModel, userContactUsModel} = require("../model/user.model");
const bcrypt = require('bcrypt');
const serviceAuth = require("../service/auth");

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const isUserExist = await userModel.findOne({ email: email });

        if (isUserExist) {
            return res.status(409).json({
                error: 'User already registered',
                message: 'The username or email is already taken', 
                userExist: false 
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const token = serviceAuth.setUserToken({ name , email });

        const user = new userModel({
            fullName: name,
            email,
            email,
            password: hashPassword,
            token: token,
        });

        const result = await user.save();
        res.cookie('uid', token, {httpOnly: true});
        res.setHeader('Authorization' , `Bearer ${token}`);
        return res.status(201).json({ message: "User is sucessfull SignUp", result});
    } catch (err) {
        console.log("here is the errror ", err);
        return res.status(404).json({message: err.message, err});
    }
};

const userLogin = async(req, res)=>{
    const {email, password} = req.body;

    try{
        const userExist = await userModel.findOne({email: email});
        if(!userExist){
            return res.json({message: "user doesn't Exist"});
        }
        const authToken = req.cookies?.uid;

        if(!authToken){
            const userExistInfo = await bcrypt.compare(password, userExist.password);
            if(userExistInfo){
                const token = serviceAuth.setUserToken({name:userExist.name,email});
                res.cookie('uid', token, {httpOnly: true,});
                return res.status(200).json({message:"You are SuccessFull logged in",
                result: userExist, userExistInfo})
            }
            return res.status(404).json({message:"Invalid Credintial", userExistInfo});
        }
        
        return res.json({message: "You are allow to login ",UserVerification});
    }catch(err){
        console.log(err);
        res.status(404).json({message:"You are getting Error",errorMsg:err});
    }
}

const contactUsMail = (req, res) =>{
    const {name, email, subject , message} = req.body;
    try{
        
    }catch(err){

    }
}

module.exports = {
    userRegister,
    userLogin,
    contactUsMail
};
