const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
    
    jwt.verify(token.split(' ')[1], secretkey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token.' });
        }

        req.user = decoded.user; // Attach user information to the request
        next();
    });
};

module.exports = verifyToken;