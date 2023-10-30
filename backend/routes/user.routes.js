const controller = require('../controller/user.controller');
const verifyToken = require('../middleware/auth');

module.exports = (server) =>{
    server.post('/auth/signin',controller.userRegister);
    server.get('/auth/sigup',verifyToken, controller.userRegister)
}