const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const verifyToken = (req, res, next) => {
    const Authorization = req.headers['authorization'];
    console.log(req.headers);
    console.log(Authorization)
    try{
        if(Authorization != undefined && Authorization != null){
            const token = Authorization.split(' ')[1];
            if(token) {
                jwt.verify(token, secretkey, (err, decoded) => {
                    if (err) {
                        return res.status(401).json({ message: 'Invalid token' });
                    }
                    next();
                });
            }else{
                return res.status(401).json({ message: 'Invalid token' });
            }
        }else{
            return res.status(403).json({message : "Forbidden"});
        }
    }catch(err){
        return res.status(404).json({message:"Error while verifying from middleware",error:err});
    }
};

module.exports = verifyToken;