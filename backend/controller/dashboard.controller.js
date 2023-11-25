const inventoryData = require('../model/addInventory.model');

const addItemsToInventary = async(req, res) => {
    const productData = req.body;
    console.log(productData);
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

module.exports ={
    addItemsToInventary,
}