const mongoose = require("mongoose")

let alotStudentsSchema = new mongoose.Schema({
    courseId : {type:mongoose.Schema.Types.ObjectId,ref:"courses"},
    trainerId : {type:mongoose.Schema.Types.ObjectId,default:null,ref:"trainers"},
    studentId : {type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    timeline : {type:String,default:null},
    status : {type:Boolean,default:true},
    createdAt : {type:Date,default:Date.now()}
})

module.exports = new mongoose.model("alotstudents",alotStudentsSchema)