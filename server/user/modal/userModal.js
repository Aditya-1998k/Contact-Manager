const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModal=mongoose.model("userData", userSchema);
module.exports=userModal;