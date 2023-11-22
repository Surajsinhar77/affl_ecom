const {addItemsToInventary} = require('../controller/dashboard.controller');
const express = require('express');
const router = express.Router();

router.post('/addProduct', addItemsToInventary);

module.exports = router;