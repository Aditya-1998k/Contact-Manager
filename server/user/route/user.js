const express=require("express");
const userModal=require("../modal/userModal");


const router=express.Router();

router.post("/add", (req, res)=>{
    userModal.find({email:req.body.email}).then((data=>{
        if(data.length){
            res.status(400).send("user already exist")
        }else{
            userModal.create({email:req.body.email , password:req.body.password}).then(()=>{
                res.status(200).send("User added successfully")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        }
    }))
});

module.exports=router;