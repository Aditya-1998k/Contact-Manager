const express=require("express");
const mongoose=require("mongoose");
const userController=require("./user/route/user");
const contactController=require('./user/route/contact')
const multer=require("multer")();
require("dotenv").config();
const cors=require("cors");
const unprotectedRoutes=["/user/signup","/user/login"];
const jwt=require("jsonwebtoken")

const app=express();
//creating server
app.listen(process.env.PORT || 3001, (err)=>{
    if(!err){
        console.log("server created successfully")
    }else{
        console.log(err)
    }
})
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(multer.array());

//creating cluster
mongoose.connect("mongodb+srv://aditya:aditya1234@contactmanager.xzijcly.mongodb.net/?retryWrites=true&w=majority",(data)=>{
    console.log("Connected with mongodb atals");
}, (err)=>{
    console.log(err)
})

app.get("/", (req, res)=>{
    res.status(200).send("hi i am your back end")
})

app.use("/user", userController)
app.use("/contact", contactController)

app.use((req, res, next)=>{
    console.log(req.url)
    unprotectedRoutes.forEach((route)=>{
        if(req.url.includes(route)){
            next();
        }else{
            const user=jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
        }
    })
})