const express=require("express");
const mongoose=require("mongoose");
const userController=require("./user/route/user");
const contactController=require('./user/route/contact')
const multer=require("multer")();

const app=express();
//creating server
app.listen(3001, (err)=>{
    if(!err){
        console.log("server created successfully")
    }else{
        console.log(err)
    }
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(multer.array());

//creating cluster
mongoose.connect("mongodb+srv://aditya:aditya1234@contactmanager.xzijcly.mongodb.net/?retryWrites=true&w=majority",(data)=>{
    console.log(data);
}, (err)=>{
    console.log(err)
})

app.get("/", (req, res)=>{
    res.status(200).send("hi i am your back end")
})

app.use("/user", userController)

app.use("/contact", contactController)