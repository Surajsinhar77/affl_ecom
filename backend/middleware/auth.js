const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const verifyToken = (req, res, next) => {
    const token = req.cookies?.uid;
    
    try{
        if(token) {
            jwt.verify(token, secretkey, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }
        
                return res.status(200).json({message:"you are suceess logedin ", data:decoded.user});
            });
        }else{
            next();
        }
    }catch(err){
        return res.status(404).json({msg:"Error while verifying from middleware",error:err});
    }
};

module.exports = verifyToken;