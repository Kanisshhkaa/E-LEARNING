const mongoose = require("mongoose")

let certificateScehma = new mongoose.Schema({
    title : {type:String,default:null},
    certificateImg : {type:String,default:null},
    customerId : {type:mongoose.Schema.Types.ObjectId,ref:"customers"},
    status: {type:Boolean,default:true},
    createdAt : {type:Date,default:Date.now}
})
module.exports = new mongoose.model("certificate",certificateScehma)