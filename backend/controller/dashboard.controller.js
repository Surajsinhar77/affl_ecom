const { error } = require('console');
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


const uploadImageForInventory = async (req, res) => {

    // try{
    const fieldData = req.body;
    const fileData = req.file;

    console.log(fieldData); body
    console.log(fileData);
    // }catch(err){

    // }
    console.log("hello ji");
    const formData = req.files
    const formDataArray = req.body;
    console.log(formData, formDataArray);
    return res.json({ message: "Data is reviced" });
}

const getItems = async (req, res) => {
    console.log("hello")
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

module.exports = {
    addItemsToInventary,
    uploadImageForInventory,
    getItems
}
