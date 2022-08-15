const mongoose=require("mongoose")

const dataSchema=new mongoose.Schema({
    user_email:String,
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
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})

const ContactModal=new mongoose.model("contactData",dataSchema)
module.exports=ContactModal