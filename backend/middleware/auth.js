const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const verifyToken = (req, res, next) => {
    const token = req.cookies?.uid;
    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
    
    jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        req.user = decoded.user; 
        next();
    });
};

module.exports = verifyToken;