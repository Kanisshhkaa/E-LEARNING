const user = require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const privateKey = "myproject123"

login = (req,res)=>{
    let validationError = [];
    if(!req.body.email){
        validationError.push("Email is required")
    }
    if(!req.body.password){
        validationError.push("Password is required")
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
        user.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                res.json({
                    status:422,
                    success:false,
                    message:"Email not matched"
                })
            }
            else{
                bcrypt.compare(req.body.password,userData.password,function(err,result){
                    if(result){
                        var payload = {
                            name : userData.name,
                            email : userData.email,
                            userType : userData.userType,
                            userId : userData._id
                        }
                        var token = jwt.sign(payload,privateKey)
                        res.json({
                            status:200,
                            success:true,
                            message:"Login Successfully",
                            token :token,
                            data:userData
                        })
                    }
                    else{
                        res.json({
                            status:422,
                            success:false,
                            message:"Invalid Password"
                        })
                    }
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
        user.findOne({_id:req.body._id})
        .then((userData)=>{
            if(!userData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.status){
                    userData.status = req.body.status
                }
                
                
                userData.save()
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

module.exports = {login,updateData}