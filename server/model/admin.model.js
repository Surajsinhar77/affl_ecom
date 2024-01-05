const mongoose = require('mongoose');

function adminSchemaGet(){
    const adminSchema = new mongoose.Schema({
        fullName :{
            type:String,
            required : true,
        },

        role:{
            type :String,
            lowwercase : true,
            required :true,
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

    return adminSchema;
}

const adminModel = ()=>{
    const adminModel = new mongoose.model('admins', adminSchemaGet());
    return adminModel;
}

module.exports = adminModel();