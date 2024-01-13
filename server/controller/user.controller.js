const {userModel, userContactUsModel} = require("../model/user.model");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const serviceAuth = require("../service/auth");
const filedata = process.env.FILE_DATA; // from env 

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


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 5000,
    secure: false,
    auth: {
        user: filedata.myEmail,
        pass: filedata.myEmailPass,
    },
});


const contactUsMail = async(req, res) =>{
    const {name, email, subject , message} = req.body;
    try{
        const mailOptions = {
            from: email, // sender address
            to: filedata.myEmail, // receiver email
            subject: `${subject}`, // Subject line
            text: `Hi there, you were emailed from ${name} <br/> ${message}`,
            html: `<h1> ${email} is now Your Subscriber </h1>`,
        }

        const info = await transporter.sendMail(mailOptions)
        if (info) {
            console.log("done sending mail");



            const thank = await transporter.sendMail(
                {
                    from: filedata.myEmail, // sender address
                    to: email, // receiver email
                    subject: "Thank You", // Subject line
                    text: `Hi there, you were emailed from ${filedata.myEmail} `,
                    html: `<h1> Thank yor From Subscribe ${email} </h1>`,
                }
            )

            if (thank) {
                req.session.additionalData = {
                    response: { mailUser: true, ownMail: true, statusCode: 'ok', statusCode2: 'fail' },
                    userMessage: 'Form submitted successfully!',
                    ownMessage: 'Form submitted successfully!',
                };
            } else {
                req.session.additionalData = {
                    response: { mailUser: true, ownMail: false, statusCode1: 'ok', statusCode2: 'fail' },
                    userMessage: 'Form submitted successfully!',
                    ownMessage: 'Form submitted Unsuccessfully!',
                };
            }
        }
        return res.status(200).json({message:" Mail sucessfull sent"})
    }catch(err){
        console.log(err);
        return res.status(404).json({message : err.message});
    }
}

module.exports = {
    userRegister,
    userLogin,
    contactUsMail
};
