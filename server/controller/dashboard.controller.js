const inventoryData = require('../model/addInventory.model');
const fs = require('fs');

const addItemsToInventary = async (req, res) => {
    const productImageData = req.file;
    const {
        productName,
        category,
        productTags,
        productSpecDisplay,
        productSpecProcessor,
        productSpecFrontCamera,
        productSpecRearCamera,
        productSpecBatteryCap,
        productSpecRam,
        productSpecStorage,
        productSpecOs,
        flipkartv1,
        amazonv1,
        fv1Price,
        fv1Link,
        av1Price,
        av1Link,
        flipkartv2,
        amazonv2,
        fv2Price,
        av2Price,
        fv2Link,
        av2Link,
        discription,
        termAndAgree,
    } = req.body.textData; 

    try{
        const productExist =  await inventoryData.findOne({productName:productName});

        if(productExist){
            return res.status(400).json({message: "This Data is already Exist",ProductId : productExist._id})
        }

        const NewProductForInventory = new inventoryData({
            productName : productName,
            productCode: productName+category+Date.now(),
            category : category,
            productTags : productTags,
            
            productSpecs : {
                productSpecDisplay : productSpecDisplay,
                productSpecProcessor : productSpecProcessor,
                productSpecFrontCamera : productSpecFrontCamera,
                productSpecRearCamera : productSpecRearCamera,
                productSpecBatteryCap : productSpecBatteryCap,
                productSpecRam : productSpecRam,
                productSpecStorage : productSpecStorage,
                productSpecOs :productSpecOs
            },
    
            ProductPicture:{
                image : {
                    data: fs.readFileSync(productImageData.path),
                    filename: productImageData.originalname,
                    contentType: productImageData.mimetype,
                    uploadingDate: Date.now(),
                    size : productImageData.size,
                }
            },
    
            varient : {
                flipkartVarient : {
                    flipkartV1 : {
                        v1 : flipkartv1,
                        price : fv1Price,
                        productLink : fv1Link,
                    },
                    flipkartV2 : {
                        v2 : flipkartv2,
                        price : fv2Price,
                        productLink : fv2Link,
                    },
                },
                
                amazonVariant : {
                    amazonV1 : {
                        v1 : amazonv1,
                        price : av1Price,
                        productLink : av1Link,
                    },
                    amazonV2 : {
                        v2 : amazonv2,
                        price : av2Price,
                        productLink : av2Link,
                    },
                },
            },

            Description : discription,
        })

        const result = await NewProductForInventory.save();
        if(result){
            return res.status(200).json({message: "Data is Sucessfull Save", result : result});
        }
        throw new error("result is false");
    }catch(err){
        console.log(err);
        return res.status(500).json({message: err.message});
    }
}

const getAllItemData = async(res, req) =>{
    try{
        const allItemData = await inventoryData.find({});
        if(allItemData){
            return res.status(200).json({message: "Data is sucessFull sent", itemData : allItemData});
        }
        return res.status(200).json({message: "Database is Empty", itemData : allItemData});
    }catch(err){
        console.log(err);
        return res.json({message: "err.message"});
    }
}


const uploadImageForInventory = async (req, res) => {

    // try{
    const fieldData = req.body;
    const fileData = req.file;
    const formData = req.files
    const formDataArray = req.body;
    return res.json({ message: "Data is reviced" });
}

const getItems = async (req, res) => {
    try{
        const data = await inventoryData.find({});
        if(data){
            return res.json({message : "Data fetched Successfully", data : data});
        }
        return res.status(404).json({message : "Data is empty"})
    }catch(error){
        console.error("message : ", error.message);
        return res.json({message :error.message, error: error});
    }
}

const getDataById = async (req, res)=>{
    const _id = req.params;

    try{
        const productId = new mongoose.Types.ObjectId(_id);
        const data = await inventoryData.findOne(productId);
        if(!data){
            return res.status(404).json({message:"Data is not present "});
        }

        return res.status(200).json({message:"data is fetch", data : data});
    }catch(err){
        console.err(err);
        console.log(err.status);
        return res.status(err?.status).json({message: err.message});
    }
}

const getData = async (req, res)=>{
    const q = req.query?.data;
    var re;
    if(q){
        re = new RegExp(q);
    }
    try{
        var data;
        if(q){
            data = await inventoryData.find(
                { 'productName': { $regex: re } },
                { 'productName': 1, '_id': 0 }
            );
        }else{
            data = await inventoryData.find();
        }
        if(!data){
            return res.status(404).json({message:"Data is not present "});
        }

        return res.status(200).json({message:"data is fetch", data : data});
    }catch(err){
        // console.err(err);
        console.log(err.status);
        // return res.status(err?.status).json({message: err.message});
    }
}

const deleteItem = async (req, res) => {
    try {
        // Ensure 'custom' header is present
        const _id = req.headers['custom'];
        if (!_id) {
            return res.status(400).json({ message: 'Missing or invalid "custom" header' });
        }
    
    //     // Attempt to create an ObjectId from the 'custom' header value
        const objectId = new mongoose.Types.ObjectId(_id);
    
    //     // Delete the document by its _id
        const result = await inventoryData.deleteOne({ _id: objectId });
    
        // Check if the document was found and deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Item not found or not deleted' });
        }
    
        // Return success response
        return res.status(200).json({ message: 'Item deleted successfully', data: result });
    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
    
}

const getLatestItems = async (req, res) => {
    try{
        const recentItems = await inventoryData.find().sort({ createdAt: -1 }).limit(4);
        if(recentItems){
            res.status(200).json({message: "Data fetched successfully", data:recentItems})
        }else{
            res.status(402).json({message: "Data not found"})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }
} 

module.exports = {
    addItemsToInventary,
    uploadImageForInventory,
    getAllItemData,
    getData,
    deleteItem,
    getLatestItems,
    getDataById,
    getItems,
}
