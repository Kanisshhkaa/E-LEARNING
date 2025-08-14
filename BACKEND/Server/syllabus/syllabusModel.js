const mongoose = require("mongoose")

const syllabusSchema = new mongoose.Schema({
    courseId : {type:mongoose.Schema.Types.ObjectId,ref:"courses"},
    trainerId:{type:mongoose.Schema.Types.ObjectId,ref:"trainers"},
    title : {type:String,default:null},
    totalTopics : {type:String,default:null},
    syllabus : {type:String,default:null},
    duration : {type:String,default:null},
    status : {type:Boolean,default:true},
    createdAt : {type:Date,default:Date.now}
})
module.exports = new mongoose.model("syllabus",syllabusSchema)