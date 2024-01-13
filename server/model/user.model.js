const mongoose = require('mongoose');

function userSchemaGet(){
    const userSchema = new mongoose.Schema({
        fullName :{
            type:String,
            required : true,
        },
    
        email :{
            type:String,
            required : true,
            lowwercase : true,
            unique:true
        },
    
        password :{
            type : String,
            required: true,
        },
        
        token:{
            type:String,
            required: true,
        }
    })

    return userSchema;
}


function userContactMail(){
    const ContactUsSchema = new mongoose.Schema({
        name :{
            type : String,
            required : true,
        },
        email :{
            type : String,
            required : true,
            unique :true,
        },
        subject :{
            type : String,
            required: true,
        },
        message :{
            type: String,
            required:true,
        }
    })
    return ContactUsSchema;
}

const userModel = ()=>{
    const userModel = new mongoose.model('users', userSchemaGet());
    const userContactUsModel = new mongoose.model('userContactus', userContactMail());
    return {
        userModel, 
        userContactUsModel
    };
}

module.exports = userModel();