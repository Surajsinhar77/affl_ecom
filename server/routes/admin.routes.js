const { adminLogin, addAdmin, getUsers } = require('../controller/admin.controller');
const verifyToken =  require('../middleware/auth');
const express = require('express');
const router = express.Router();

// Saprate Routes for this 
router.post('/addNewAdmin',verifyToken ,addAdmin);
router.post('/login', adminLogin);
router.get('/getUsers', getUsers)

// returning the saprate Routes
module.exports = router;
 