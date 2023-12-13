const {addItemsToInventary, uploadImageForInventory, getItems} = require('../controller/dashboard.controller');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.Uploader');

router.post('/addProduct', upload.single('image') ,addItemsToInventary);
router.get('/getItems', getItems);
// router.post('/uploadImage', uploadImageForInventory);

module.exports = router;