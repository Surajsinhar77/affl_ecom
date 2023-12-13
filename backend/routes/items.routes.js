const {addItemsToInventary, uploadImageForInventory, getAllItemData} = require('../controller/dashboard.controller');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.Uploader');

router.post('/addProduct', upload.single('image') ,addItemsToInventary);
router.post('/getDataFrom', getAllItemData);

module.exports = router;