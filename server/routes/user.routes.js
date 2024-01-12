const {userLogin, userRegister, contactUsMail} = require('../controller/user.controller');
const express = require('express');
const router = express.Router();

// Saprate Routes for this 
router.post('/signup', userRegister);
router.post('/signin', userLogin);
router.post('/contactus', contactUsMail);

// returning the saprate Routes
module.exports = router;
