const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        email:{type:String,unique:true},
        userName:{type:String},
        userPass:{type:String},
        userType:{type:String}, //student or teacher
        imageUrl:{type:String},
        roll:{type:Number,default:0},
        group:{type:String},
        mobile:{type:String},    
        address:{type:String},
        fatherName:{type:String},
        motherName:{type:String},
        subjectName:{type:String},
        qualification:{type:String}


    },
    {
        versionKey:false
    }
)
const UsersModel = mongoose.model("users",DataSchema)
module.exports = UsersModel