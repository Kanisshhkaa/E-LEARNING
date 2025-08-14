const booking = require("./bookingModel")

add = (req,res)=>{
    let validationError=[];
    if(!req.body.customerId){
        validationError.push("CustomerId is required")
    }
    if(!req.body.courseId){
        validationError.push("CourseId is required")
    }
   
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validaiton Error",
            errors:validationError
        })
    }
    else{
                
                let bookingObj = new booking()
                bookingObj.courseId = req.body.courseId
                bookingObj.customerId = req.body.customerId
                bookingObj.save()

                .then((bookingSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added successfully",
                        data:bookingSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errors:err.message
                    })
                })
    }
}

getall = async(req,res)=>{
    const totalCount = await booking.countDocuments(req.body).exec()
    booking.find(req.body).populate("customerId").populate("courseId")
    .then((bookingData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:bookingData,
            count:totalCount
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal Server Error",
            errors:err.message
        })
    })
}
getSingleData = (req,res)=>{
    let  validationError = []
    if(!req.body._id){
        validationError.push("Id is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            errors:validationError
        })
    }
    else{
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
            res.json({
                status:404,
                success:false,
                message:"Data Not Found"
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message:"Data Loaded Successfully",
                data:bookingData
            })
        }
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal Server Error",
            errors:err.message
        })
    })
}
}
deleteData = (req,res)=>{
    validationError=[]
    if(!req.body._id){
        validationError.push("ID is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            data:validationError
        })
    }
    else{
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                booking.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:bookingData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errros:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:true,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}
updateData = (req,res)=>{
    validationError=[]
    if(!req.body._id){
        validationError.push("ID is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            data:validationError
        })
    }
    else{
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.courseId){
                    bookingData.courseId = req.body.courseId
                }
                if(req.body.customerId){
                    bookingData.customerId = req.body.customerId
                }
                if(req.body.status){
                    bookingData.status = req.body.status
                }
                bookingData.save()
                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Updated Successfully",
                        data:resSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errors:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}
module.exports = {add,getall,getSingleData,deleteData,updateData}