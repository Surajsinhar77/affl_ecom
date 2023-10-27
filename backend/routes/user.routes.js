const controller = require('../controller/user.controller');


module.exports = (server) =>{
    server.get('/test', controller.userRegister);
    server.get('/auth/sigin/', controller.userRegister);

}