const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    customerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    trainerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"trainers"},
    userType:{type:Number,default:3},
    status:{type:String,default:"Unblocked"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = new mongoose.model("users",userSchema)