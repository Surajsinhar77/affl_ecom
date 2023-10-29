const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const serviceAuth = require("../service/auth");

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUserExist = await userModel.findOne({ email: email });

        if (isUserExist) {
            return res.status(409).json({ message: "User Already Exist", userExist: true });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const token = serviceAuth.setUserToken({ name, email });

        const user = new userModel({
            fullName: name,
            email,
            email,
            password,
            hashPassword,
            token: token,
        });

        const result = await user.save();
        console.log("this is the data save result :", result);

        res.cookie(name, token, {
            httpOnly: true,
            secure: isSecure,
            signed: true,
            maxAge: 3600000,
        });

        return res.json({ message: "User is sucessfull login", result });
    } catch (err) {
        console.log("here is the errror ", err);
        return res.json(err);
    }
};

const userLogin = async(req, res)=>{

}

module.exports = {
    userRegister,
    userLogin,
};
