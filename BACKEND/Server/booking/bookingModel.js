const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    courseId : {type:mongoose.Schema.Types.ObjectId,ref:"courses"},
    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customers"},
    status : {type:String,default:"Approved"},
    createdAt : {type:Date,default:Date.now}
})
module.exports = new mongoose.model("bookings",bookingSchema)