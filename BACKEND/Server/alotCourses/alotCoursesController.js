const alotcourse = require("./alotCoursesModel")

add = (req,res)=>{
    let validationError = [] ;
    if(!req.body.trainerId){
        validationError.push("TrainerId is required")
    }
    if(!req.body.courseId){
        validationError.push("CourseId is required")
    }
    if(!req.body.deadline){
        validationError.push("DeadLine is required")
    }
    if(!req.body.description){
        validationError.push("Description is required")
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
                let courseObj = new alotcourse()
                courseObj.trainerId = req.body.trainerId
                courseObj.courseId = req.body.courseId
                courseObj.deadline = req.body.deadline
                courseObj.description = req.body.description
                courseObj.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added successfully",
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
}

getall = async(req,res)=>{
    let totalCount = await alotcourse.countDocuments(req.body).exec()
    alotcourse.find(req.body).populate("courseId").populate("trainerId")

    .then((coursesData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:coursesData,
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
    let validationError = [];
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
        alotcourse.findOne({_id:req.body._id})
        .then((coursesData)=>{
            if(!coursesData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                res.json({
                    status:200,
                    success:true,
                    message:"Data loaded Successfully",
                    data:coursesData
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
    let validationError = [];
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
        alotcourse.findOne({_id:req.body._id})
        .then((coursesData)=>{
            if(!coursesData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                alotcourse.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data deleted Successfully",
                        data:coursesData
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

updateData = (req,res)=>{
    let validationError = [];
    if(!req.body._id){
        validationError.push("ID is required")
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
        alotcourse.findOne({_id:req.body._id})
        .then((coursesData)=>{
            if(!coursesData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                if(req.body.trainerId){
                    coursesData.trainerId = req.body.trainerId
                }
                if(req.body.courseId){
                    coursesData.courseId = req.body.courseId
                }
                if(req.body.deadline){
                    coursesData.deadline = req.body.deadline
                }
                if(req.body.description){
                    coursesData.description = req.body.description
                }
                coursesData.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"DATA UPDATED SUCCESSFULLY",
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