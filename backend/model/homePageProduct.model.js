const mongoose = require('mongoose');


const productSchema = () =>{
    const homeProductSchema = mongoose.Schema({
        latestProduct : {
            title : {
                type:String,
                required : true,
            },
    
            price : {
                type : Number,
                required : true,
            },
    
            category : {
                type : Number,
                required : true,
            },
    
            productTags : {
                type : String,
                required : true,
            },
            
            description : {
                type :String,
                required : true,
            }
        },

        mostSellingProduct : {
            title : {
                type:String,
                required : true,
            },
    
            price : {
                type : Number,
                required : true,
            },
    
            category : {
                type : Number,
                required : true,
            },
    
            productTags : {
                type : String,
                required : true,
            },
            
            description : {
                type :String,
                required : true,
            }
        },

        mostDiscountProduct : {
            title : {
                type:String,
                required : true,
            },
    
            price : {
                type : Number,
                required : true,
            },
    
            category : {
                type : Number,
                required : true,
            },
    
            productTags : {
                type : String,
                required : true,
            },
            
            description : {
                type :String,
                required : true,
            }
        },
    })

    return homeProductSchema;
}


export default productLatestModel;