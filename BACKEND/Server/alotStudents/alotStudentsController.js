const alotstudents = require("./alotStudentsModel")

add = (req,res)=>{
    let validationError = [];
    if(!req.body.courseId){
        validationError.push("Course ID is required")
    }
    if(!req.body.trainerId){
        validationError.push("Trainer ID is required")
    }
    if(!req.body.studentId){
        validationError.push("Student ID is required")
    }
    if(!req.body.timeline){
        validationError.push("TimeLine is required")
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
                let studentsObj = new alotstudents()
                studentsObj.courseId = req.body.courseId
                studentsObj.trainerId = req.body.trainerId
                studentsObj.studentId = req.body.studentId
                studentsObj.timeline = req.body.timeline
                studentsObj.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
                        data : resSave
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


getall =  async(req,res)=>{
    const totalCount = await alotstudents.countDocuments(req.body).exec()
    alotstudents.find(req.body).populate("trainerId").populate("courseId").populate("studentId")
    .then((alotstudentsData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:alotstudentsData,
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
        alotstudents.findOne({_id:req.body._id})
        .then((alotstudentsData)=>{
            if(!alotstudentsData){
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
                data:alotstudentsData
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
        alotstudents.findOne({_id:req.body._id})
        .then((alotstudentsData)=>{
            if(!alotstudentsData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                alotstudents.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:alotstudentsData
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
    let validationError=[];
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
        alotstudents.findOne({_id:req.body._id})
        .then((alotstudentsData)=>{
            if(!alotstudentsData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.courseId){
                    alotstudentsData.courseId = req.body.courseId
                }
                
                if(req.body.trainerId){
                    alotstudentsData.trainerId = req.body.trainerId
                }

                if(req.body.studentId){
                    alotstudentsData.studentId = req.body.studentId
                }

                if(req.body.deadline){
                    alotstudentsData.deadline = req.body.deadline
                }
                alotstudentsData.save()
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