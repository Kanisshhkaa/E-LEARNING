const user = require("../user/userModel")
const trainer = require("./trainerModel")
const bcrypt = require("bcrypt")
const roundValue = 10;

register=(req,res)=>{
    let validationError=[];

    if(!req.body.name){
        validationError.push("Name is required")
    }
    if(!req.body.email){
        validationError.push("Email is required")
    }
    if(!req.body.password){
        validationError.push("Password is required")
    }
    if(!req.body.contact){
        validationError.push("Contact is required")
    }
    if(!req.body.gender){
        validationError.push("Gender is required")
    }
    if(!req.file){
        validationError.push("Profile Image is required")
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
        user.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                let userObj = new user()
                userObj.name = req.body.name
                userObj.email =req.body.email
                userObj.password = bcrypt.hashSync(req.body.password,roundValue)
                userObj.userType=2
                userObj.save()

                .then((userRes)=>{
                    let trainerObj = new trainer()
                    trainerObj.name = req.body.name
                    trainerObj.email = req.body.email
                    trainerObj.password = req.body.password
                    trainerObj.contact = req.body.contact
                    trainerObj.gender = req.body.gender
                    trainerObj.profile = "trainerprofile/" + req.file.filename
                    trainerObj.userId = userRes._id

                    trainerObj.save()

                    .then((trainerRes)=>{
                        userObj.trainerId=trainerRes._id
                        userObj.save()
                        .then(()=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"User Resgistered Successflully",
                                data:trainerRes
                            })
                        })
                        .catch((err)=>{
                            res.json({
                                status:500,
                                success:false,
                                message:"Intermal Server Error",
                                errors:err.message
                            })
                        })
                    })
                })
                
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"User already exists",
                    data:userData
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

getall = async(req,res)=>{
    const totalCount = await trainer.countDocuments().exec()
    trainer.find()
    .then((trainerData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:trainerData,
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
        trainer.findOne({_id:req.body._id})
        .then((trainerData)=>{
            if(!trainerData){
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
                data:trainerData
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
        trainer.findOne({_id:req.body._id})
        .then((trainerData)=>{
            if(!trainerData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.name){
                    trainerData.name = req.body.name
                }
                if(req.body.email){
                    trainerData.email = req.body.email
                }
                if(req.body.password){
                    trainerData.password = req.body.password
                }
                if(req.body.contact){
                    trainerData.contact = req.body.contact
                }
                if(req.body.gender){
                    trainerData.gender = req.body.gender
                }
                if(req.file){
                   trainerData.profile = "trainerprofile/" + req.file.filename
                }
                if(req.body.status){
                    trainerData.status = req.body.status
                }
                trainerData.save()
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

module.exports = {register,getall,getSingleData,updateData}