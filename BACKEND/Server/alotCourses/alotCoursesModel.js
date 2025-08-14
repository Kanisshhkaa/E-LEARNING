const mongoose = require("mongoose")

let alotCourseSchema = new mongoose.Schema({
    trainerId : {type:mongoose.Schema.Types.ObjectId,default:null,ref:"trainers"},
    courseId : {type:mongoose.Schema.Types.ObjectId,ref:'courses'},
    deadline : {type:String,default:null},
    description : {type:String,default:null},
    status : {type:Boolean,default:true},
    createdAt : {type:Date,default:Date.now()}
})

module.exports = new mongoose.model("alotcourses",alotCourseSchema)