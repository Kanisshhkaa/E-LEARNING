const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/eLearning-kanishka")
.then(()=>{
    console.log("DATABASE CONNECTED SUCCESFULLY");
})
.catch((err)=>{
    console.log("Database Connection Failed");
    console.log(err);
})