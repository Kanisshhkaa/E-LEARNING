const certificate = require("./certificateModel")

add = (req,res)=>{
    validationError = []
    if(!req.file){
        validationError.push("Certificate Image is Required")
    }
    if(!req.body.title){
        validationError.push("Title is Required")
    }
    if(!req.body.customerId){
        validationError.push("customerId is Required")
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
                let certificateObj = new certificate()
                certificateObj.title = req.body.title
                certificateObj.certificateImg = "Certificates/" + req.file.filename
                certificateObj.customerId = req.body.customerId
                certificateObj.save()

                .then((certificateSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added successfully",
                        data:certificateSave
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
    const totalCount = await certificate.countDocuments(req.body).exec()
    certificate.find(req.body).populate("customerId")
    .then((certificateData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data added successfully",
            data:certificateData,
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
        certificate.findOne({_id:req.body._id})
        .then((certificateData)=>{
            if(!certificateData){
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
                data:certificateData
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
        certificate.findOne({_id:req.body._id})
        .then((certificateData)=>{
            if(!certificateData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                certificate.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:certificateData
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
        certificate.findOne({_id:req.body._id})
        .then((certificateData)=>{
            if(!certificateData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                
                if(req.file){
                    certificateData.certificateImg = "Certificates/" + req.file.filename
                }
                if(req.body.title){
                    certificateData.title = req.body.title
                }
                certificateData.save()
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