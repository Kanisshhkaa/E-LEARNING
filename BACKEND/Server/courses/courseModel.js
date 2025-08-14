const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name:{type:String,default:null},
    price:{type:Number,default:null},
    description:{type:String,default:null},
    image:{type:String,default:null},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"categories"},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now}
})
module.exports= new mongoose.model("courses",courseSchema)