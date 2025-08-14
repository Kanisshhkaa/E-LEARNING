const syllabus = require("./syllabusModel")

add = (req,res)=>{
    validationError=[]
    if(!req.body.courseId){
        validationError.push("courseId is required")
    }
    if(!req.body.trainerId){
        validationError.push("trainerId is required")
    }
    if(!req.body.syllabus){
        validationError.push("Syllabus is required")
    }
    if(!req.body.title){
        validationError.push("Title is required")
    }
    if(!req.body.totalTopics){
        validationError.push("Number of Topics  is required")
    }
    if(!req.body.duration){
        validationError.push("Duration is required")
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
        syllabus.findOne({courseId:req.body.courseId})
        .then((syllabusData)=>{
            if(!syllabusData){
                let syllabusObj = new syllabus()
                syllabusObj.courseId = req.body.courseId
                syllabusObj.trainerId = req.body.trainerId
                syllabusObj.syllabus = req.body.syllabus
                syllabusObj.title = req.body.title
                syllabusObj.totalTopics = req.body.totalTopics
                syllabusObj.duration = req.body.duration
                syllabusObj.save()

                .then((syllabusSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
                        data:syllabusSave
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
                    message:"Data already exists",
                    errors:syllabusData
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
    const totalCount = await syllabus.countDocuments(req.body).exec()
    syllabus.find(req.body).populate("courseId").populate("trainerId")
    .then((syllabusData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:syllabusData,
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
        syllabus.findOne({_id:req.body._id})
        .then((syllabusData)=>{
            if(!syllabusData){
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
                data:syllabusData
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
        syllabus.findOne({_id:req.body._id})
        .then((syllabusData)=>{
            if(!syllabusData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                syllabus.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:syllabusData
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
        syllabus.findOne({_id:req.body._id})
        .then((syllabusData)=>{
            if(!syllabusData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.syllabus){
                    syllabusData.syllabus = req.body.syllabus
                }
               
                if(req.body.courseId){
                    syllabusData.courseId = req.body.courseId
                }
                if(req.body.trainerId){
                    syllabusData.trainerId = req.body.trainerId
                }
                if(req.body.title){
                    syllabusData.title = req.body.title
                }
                if(req.body.totalTopics){
                    syllabusData.totalTopics = req.body.totalTopics
                }
                if(req.body.duration){
                    syllabusData.duration = req.body.duration
                }
                syllabusData.save()
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