const jwt = require('jsonwebtoken');
const params = require('../params.json');
const secretkey = params.secretkey;

const verifyToken = (req, res, next) => {
    const Authorization = req.headers['authorization'];
    console.log(Authorization)
    try{
        const token = Authorization.split(' ')[1];
        
        console.log("token: ", token)
        if(token != undefined && token != null){
            if(token) {
                jwt.verify(token, secretkey, (err, decoded) => {
                    console.log("error : ", err)
                    if (err) {
                        return res.status(401).json({ message: 'Invalid token' });
                    }
                    next();
                });
            }else{
                return res.status(404).json({message: "token is not found or null"});
            }
        }else{
            return res.status(403).json({message : "Forbidden"});
        }
    }catch(err){
        return res.status(404).json({message:"Error while verifying from middleware",error:err});
    }
};

module.exports = verifyToken;