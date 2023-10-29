const controller = require('../controller/user.controller');


module.exports = (server) =>{
    server.post('/test', (req, res)=>{
        return res.json({message: "hello world"});
    })
    server.post('/auth/signin', controller.userRegister);
    // server.get('/auth/sigin', controller.userRegister)
}