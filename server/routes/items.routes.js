const {
    addItemsToInventary, 
    uploadImageForInventory, 
    getItems,
    getData,
    deleteItem,
    getLatestItems
} = require('../controller/dashboard.controller');

const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.Uploader');

router.get('/getItems', getItems);
router.get('/getData', getData);
router.get('/getLatestItems', getLatestItems)
// router.post('/uploadImage', uploadImageForInventory);

module.exports = router;