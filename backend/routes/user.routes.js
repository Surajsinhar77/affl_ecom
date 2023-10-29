const controller = require('../controller/user.controller');


module.exports = (server) =>{
    server.post('/auth/signin', controller.userRegister);
    // server.get('/auth/sigin', controller.userRegister)
}