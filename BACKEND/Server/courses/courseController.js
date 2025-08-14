const course = require("./courseModel")

add=(req,res)=>{
    validationError=[]
    if(!req.body.name){
        validationError.push("Name is required")
    }
    if(!req.body.price){
        validationError.push("Price is required")
    }
    if(!req.body.description){
        validationError.push("Description is required")
    }
    if(!req.file){
        validationError.push("Image is required")
    }
    if(!req.body.categoryId){
        validationError.push("categoryId is required")
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
        course.findOne({name:req.body.name})
        .then((courseData)=>{
            if(!courseData){
                let courseObj = new course()
                courseObj.name=req.body.name
                courseObj.price=req.body.price
                courseObj.description=req.body.description
                courseObj.image="Course/" + req.file.filename
                courseObj.categoryId=req.body.categoryId
                courseObj.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
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
            else{
                res.json({
                    status:500,
                    success:false,
                    message:"data already exists",
                    data:courseData
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

getall =  async(req,res)=>{
    const totalCount = await course.countDocuments(req.body).exec
    course.find(req.body).populate("categoryId")
    .then((courseData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:courseData,
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
        course.findOne({_id:req.body._id})
        .then((courseData)=>{
            if(!courseData){
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
                data:courseData
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
        course.findOne({_id:req.body._id})
        .then((courseData)=>{
            if(!courseData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                course.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:courseData
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
        course.findOne({_id:req.body._id})
        .then((courseData)=>{
            if(!courseData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.categoryId){
                    courseData.categoryId = req.body.categoryId
                }
                if(req.body.name){
                    courseData.name = req.body.name
                }
                if(req.body.price){
                    courseData.price = req.body.price
                }
                if(req.file){
                    courseData.image = "Course/" + req.file.filename
                }
                if(req.body.description){
                    courseData.description = req.body.description
                }
                courseData.save()
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