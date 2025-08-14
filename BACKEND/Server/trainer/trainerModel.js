const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    contact:{type:String,default:null},
    gender:{type:String,default:null},
    profile:{type:String,default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"users"},
    userType:{type:Number,default:2},
    status:{type:String,default:"Unblocked"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = new mongoose.model("trainers",trainerSchema)