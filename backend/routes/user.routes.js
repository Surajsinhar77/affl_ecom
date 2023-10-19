const controller = require('../controller/user.controller');


module.exports = (server) =>{
    server.get('/test', controller.userRegister);
}