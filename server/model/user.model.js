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

const userModel = ()=>{
    const userModel = new mongoose.model('users', userSchemaGet());
    return userModel;
}

module.exports = userModel();