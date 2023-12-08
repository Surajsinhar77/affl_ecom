const inventoryData = require('../model/addInventory.model');
const multer = require('multer');


const addItemsToInventary = async(req, res) => {
    const productData = req.body;
    console.log("This is req files and it's data : ", req.files);
    // const {
    //     productName,
    //     category,
    //     productTags,
    //     productSpecDisplay,
    //     productSpecProcessor,
    //     productSpecFrontCamera,
    //     productSpecRearCamera,
    //     productSpecBatteryCap,
    //     productSpecRam,
    //     productSpecStorage,
    //     productSpecOs,
    //     discription,
    //     termAndAgree,
    //     // File Data here
    //     file1,
    //     file2,
    //     file3,
    //     file4,
        
    //     // Flipkart variant Data is Here 
    //     flipkartv1,
    //     fv1Price,
    //     fv1Link,

    //     flipkartv2,
    //     fv2Price,
    //     fv2Link,

    //     // amazon Varient Data is here
    //     amazonv1,
    //     av1Price,
    //     av1Link,

    //     amazonv2,
    //     av2Price,
    //     av2Link,


    // } = productData;
    // contnious from here by tommrow
    return res.json("I get the data Thank you");
}


const uploadImageForInventory = async (req, res) =>{

    // try{
        const fieldData = req.body;
        const fileData = req.file;

        console.log(fieldData);body
        console.log(fileData);
    // }catch(err){

    // }
    console.log("hello ji");
    const formData = req.files
    const formDataArray = req.body;
    console.log(formData, formDataArray);
    return res.json({message: "Data is reviced"});
}

module.exports ={
    addItemsToInventary,
    uploadImageForInventory
}