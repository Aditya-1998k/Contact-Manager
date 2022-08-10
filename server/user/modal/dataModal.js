const mongoose=require("mongoose")

const dataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        maxLength:10
    },
    country:{
        type:String,
        required:true
    }
})

const dataModal=new mongoose.model("data",dataSchema)
module.exports=dataModal