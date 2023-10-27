const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{
    const token = req.headers.Authorization;  
}