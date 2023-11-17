const mongoose = require('mongoose');

function enterItemSchemaGet(){
    const itemsSchema = new mongoose.Schema({

        productName :{
            type :String,
            required : true,
        },
    
        category :{
            type :String,
            required : true,
        },
    
        productTags :{
            type :String,
            required : true,
        },
        
        productSpecs :{
            productSpecDisplay :{
                type : String,
                required : true,
            },
            productSpecProcessor :{
                type : String,
                required : true,
            },
            productSpecFrontCamera :{
                type : String,
                required :true, 
            },
            productSpecRearCamera :{
                type : String,
                required :true,
            },
            productSpecBatteryCap :{
                type : String,
                required :true,
            },
            productSpecRam :{
                type : String,
                required :true,
            },
            productSpecStorage :{
                type : String,
                required :true,
            },
            productSpecStorage :{
                type : String,
                required :true,
            },
            productSpecOs :{
                type : String,
                required :true,
            }
        },

        ProductPicture:{
            type :Array,
            required :true,
        },

        
    })

    return itemsSchema;
}

const itemsModel = ()=>{
    const itemModel = new mongoose.model('users', enterItemSchemaGet());
    return itemModel;
}

module.exports = itemsModel();