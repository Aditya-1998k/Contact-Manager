const express=require("express");
const mongoose=require("mongoose");

const app=express();
//creating server
app.listen(3001, (err)=>{
    if(!err){
        console.log("server created successfully")
    }else{
        console.log(err)
    }
})

//creating cluster