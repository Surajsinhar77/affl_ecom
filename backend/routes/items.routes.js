const {addItemsToInventary, uploadImageForInventory} = require('../controller/dashboard.controller');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.Uploader');

router.post('/addProduct', upload.array('formData', 4) ,addItemsToInventary);
router.post('/uploadImage', uploadImageForInventory);

module.exports = router;