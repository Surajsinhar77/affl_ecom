const jwt = require('jsonwebtoken');
const secretkey = "*Suraj*Div*you@729";

const verifyToken = (req, res, next) => {
    // const token = req.cookies?.uid;
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJTdXJhaiBLdW1hciIsImVtYWlsIjoic3VyYWpzaW5oYWtpbmc3MTdAZ21haWwuY29tIiwiaWF0IjoxNjk4NzA2NDA5fQ.eDT6lkPmH-khk18OSz4f3rdVOdo3T8nwRQOqKwapICA'
    console.log(token);
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