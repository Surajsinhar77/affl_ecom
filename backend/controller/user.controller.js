const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const serviceAuth = require("../service/auth");


const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("This is the header", req.headers);

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
        return res.json({ message: "User is sucessfull login", result });
    } catch (err) {
        console.log("here is the errror ", err);
        return res.json(err);
    }
};

const userLogin = async(req, res)=>{
    const {email, password} = req.body;

    console.log('This is from middleware ',req.user);

    try{
        const userExist = await userModel.findOne({email: email});
        if(!userExist){
            return res.json({message: "user doesn't Exist"});
        }
        const authToken = req.cookies?.uid;

        const UserVerification = serviceAuth.getuserToken(authToken);

        if(!authToken){
            console.log(UserVerification);
            if(!UserVerification){
                return res.json(UserVerification);
            }
            
            const userExistInfo = await bcrypt.compare(password, userExist.email);
            if(userExistInfo){
                const token = serviceAuth.setUserToken({name:userExist.name,email});
                // res.setHeader('Authorization', `Bearer ${token}`);
                res.cookie('uid', token);
                return res.json({message:"You are SuccessFull logged in", userExistInfo})
            }
            return res.json({message:"Invalid Credintial"});
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
