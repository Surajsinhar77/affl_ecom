const {adminLogin,addAdmin} = require('../controller/admin.controller');
const express = require('express');
const router = express.Router();

// Saprate Routes for this 
router.post('/addNewAdmin', addAdmin);
router.post('/admin', adminLogin);


// returning the saprate Routes
module.exports = router;
