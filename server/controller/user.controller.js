const { userModel, userContactUsModel } = require("../model/user.model");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')
const serviceAuth = require("../service/auth");

//Email data from Env file
const myEmail = process.env.myEmail;
const myEmailPass = process.env.myEmailPass;

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
        const token = serviceAuth.setUserToken({ name, email });

        const user = new userModel({
            fullName: name,
            email,
            email,
            password: hashPassword,
            token: token,
        });

        const result = await user.save();
        res.cookie('uid', token, { httpOnly: true });
        res.setHeader('Authorization', `Bearer ${token}`);
        return res.status(201).json({ message: "User is sucessfull SignUp", result });
    } catch (err) {
        console.log("here is the errror ", err);
        return res.status(404).json({ message: err.message, err });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await userModel.findOne({ email: email });
        if (!userExist) {
            return res.json({ message: "user doesn't Exist" });
        }
        const authToken = req.cookies?.uid;

        if (!authToken) {
            const userExistInfo = await bcrypt.compare(password, userExist.password);
            if (userExistInfo) {
                const token = serviceAuth.setUserToken({ name: userExist.name, email });
                res.cookie('uid', token, { httpOnly: true, });
                return res.status(200).json({
                    message: "You are SuccessFull logged in",
                    result: userExist, userExistInfo
                })
            }
            return res.status(404).json({ message: "Invalid Credintial", userExistInfo });
        }

        return res.json({ message: "You are allow to login ", UserVerification });
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "You are getting Error", errorMsg: err });
    }
}



const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 5000,
    secure: false,
    auth: {
        user: myEmail,
        pass: myEmailPass,
    },
});


const contactUsMail = async (req, res) => {

    const { name, email, subject, message } = req.body.userFormData;
    try {
        const mailOptions = {
            from: email, // sender address
            to: myEmail, // receiver email
            subject: `${subject}`, // Subject line
            text: `Hi there, you were emailed from ${name} <br/> ${message}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${subject}</title>
                </head>
                <body>
                <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto;">
                    <header style="background-color: #f5f5f5; padding: 20px;">
                    <img src="https://your-logo-url" alt="Your Logo" style="width: 150px;">
                    </header>
                
                    <h3 style="font-size: 24px; margin: 20px 0;">Hello ${name},</h3>
                
                    <p style="margin: 20px 0;">
                        ${message}
                    </p>
                
                    <a href="https://your-link" style="background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 0 auto;">Click Here</a>
                
                    <footer style="background-color: #f5f5f5; padding: 20px; text-align: center;">
                    <p>© 2023 Afflite MyAmazingStore</p>
                    </footer>
                </div>
                </body>
                </html>
            `,
        }

        const info = await transporter.sendMail(mailOptions)
        if (info) {
            console.log("done sending mail");
            const thank = await transporter.sendMail(
                {
                    from: myEmail, // sender address
                    to: email, // receiver email
                    subject: "Thank You", // Subject line
                    text: `Hi there, you were emailed from ${myEmail} `,
                    html: `<h1> Thank yor From Subscribe ${email} </h1>`,
                }
            )
        }
        return res.status(200).json({ message: " Mail sucessfull sent" })
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: err.message });
    }
}

module.exports = {
    userRegister,
    userLogin,
    contactUsMail
};
