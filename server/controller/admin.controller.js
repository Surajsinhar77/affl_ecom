const adminModel = require('../model/admin.model');
const bcrypt = require('bcrypt');
const serviceAuth = require('../service/auth');

const adminLogin = async(req, res)=>{
    const {email, password} = req.body;
    console.log("From the admin Login Function:",email, password);

    try{
        const userExist = await adminModel.findOne({email: email});
        if(!userExist){
            return res.json({message: "user doesn't Exist"});
        }
            const userExistInfo = await bcrypt.compare(password, userExist.password);
            if(userExistInfo){
                const token = serviceAuth.setUserToken({name:userExist.name,email});
                // res.cookie('adminUid', token, {httpOnly: true,});
                res.setHeader('Authorization' , `Bearer ${token}`);
                return res.status(200).json({message:"You are SuccessFull logged in",
                result: userExist, userExistInfo})
            }
            return res.json({message: "Invalid username or Password" ,userExistInfo});
    }catch(err){
        console.log(err);
        res.status(404).json({message:"You are getting Error",errorMsg:err});
    }
}


const addAdmin = async(req, res)=>{
    // console.log("jhbdsf");
    // console.log(req.body)
    const {username,email,password, role} = req.body.data;
    console.log(username, email, password, role)
    try {
        const isAdminExist = await adminModel.findOne({ email: email });
        console.log(isAdminExist)

        if (isAdminExist) {
            return res.status(409).json({ message: "Admin Already Exist", AdminExist: true });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        // console.log("hash", hashPassword)
        const token = serviceAuth.setUserToken({ username , email });

        // console.log("token", token)

        const user = new adminModel({
            fullName: username,
            email,
            role, 
            password: hashPassword,
            token,
        });

        const result = await user.save();
        // res.cookie('adminuid', token, {httpOnly: true});
        res.setHeader('Authorization' , `Bearer ${token}`);
        return res.status(200).json({ message: "New Admin is sucessfull Added", result});
    } catch (err) {
        return res.status(404).json({message: err.message, err});
    }
}

const getUsers = async (req, res) => {
    try{ 
        const data = await adminModel.find({});

        if(data){
            res.status(200).json({msg: "Users data fetched successfully", data : data})
        }else{
            res.status(404).json({msg: "No user found"})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({msg: "Internal Server Error!"})
    }
}

module.exports={
    adminLogin,
    addAdmin,
    getUsers
}