const {adminLogin,addAdmin} = require('../controller/admin.controller');
const verifyToken =  require('../middleware/auth');
const express = require('express');
const router = express.Router();

// Saprate Routes for this 
router.post('/addNewAdmin',verifyToken ,addAdmin);
router.post('/login', adminLogin);


// returning the saprate Routes
module.exports = router;
