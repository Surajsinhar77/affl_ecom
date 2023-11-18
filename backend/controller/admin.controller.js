const adminModel = require('../model/admin.model');

const adminLogin = async(req, res)=>{
    const {email, password} = req.body;

    try{
        const userExist = await adminModel.findOne({email: email});
        if(!userExist){
            return res.json({message: "user doesn't Exist"});
        }
        const authToken = req.headers.authorization.split(" ")[1];

        if(!authToken){
            const userExistInfo = await bcrypt.compare(password, userExist.password);
            if(userExistInfo){
                const token = serviceAuth.setUserToken({name:userExist.name,email});
                res.cookie('adminUid', token, {httpOnly: true,});
                return res.status(200).json({message:"You are SuccessFull logged in",
                result: userExist, userExistInfo})
            }
            return res.status(404).json({message:"Invalid Credintial", userExistInfo});
        }
        
        return res.json({message: "You are allow to login ",userExist});
    }catch(err){
        console.log(err);
        res.status(404).json({message:"You are getting Error",errorMsg:err});
    }
}


const addAdmin = async(req, res)=>{
    const {name,email,password, role} = req.body;
    try {
        const isAdminExist = await adminModel.findOne({ email: email });

        if (isAdminExist) {
            return res.status(409).json({ message: "Admin Already Exist", AdminExist: true });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const token = serviceAuth.setUserToken({ name , email });

        const user = new adminModel({
            fullName: name,
            email,
            role, 
            password: hashPassword,
            token: token,
        });

        const result = await user.save();
        res.cookie('adminuid', token, {httpOnly: true});
        // res.setHeader(`Authorization : Bearer ${token}`);
        return res.status(200).json({ message: "New Admin is sucessfull Added", result});
    } catch (err) {
        console.log("here is the errror ", err);
        return res.status(404).json({message: err.message, err});
    }
}


module.exports={
    adminLogin,
    addAdmin
}