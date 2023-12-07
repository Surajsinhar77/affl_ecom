const {addItemsToInventary, uploadImageForInventory} = require('../controller/dashboard.controller');
const express = require('express');
const router = express.Router();

router.post('/addProduct', addItemsToInventary);
router.post('/uploadImage', uploadImageForInventory);

module.exports = router;