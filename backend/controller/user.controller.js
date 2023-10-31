const userModel = require("../model/user.model");
const bcrypt = require('bcrypt');
const serviceAuth = require("../service/auth");


const userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const isUserExist = await userModel.findOne({ email: email });

        if (isUserExist) {
            return res.status(409).json({ message: "User Already Exist", userExist: true });
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
        res.cookie('uid', token);
        // res.setHeader(`Authorization : Bearer ${token}`);
        return res.json({ message: "User is sucessfull SignIn", result });
    } catch (err) {
        console.log("here is the errror ", err);
        return res.json({message: err.message, err});
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
                res.cookie('uid', token);
                return res.json({message:"You are SuccessFull logged in", userExistInfo})
            }
            return res.json({message:"Invalid Credintial", userExistInfo});
        }
        
        return res.json({message: "You are allow to login ",UserVerification});
    }catch(err){
        console.log(err);
        res.json({message:"You are getting Error",errorMsg:err});
    }
}

module.exports = {
    userRegister,
    userLogin,
};
