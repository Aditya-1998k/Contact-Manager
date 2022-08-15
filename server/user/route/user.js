const express=require("express");
const userModal=require("../modal/userModal");
const generatePassword=require("../utility");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")


const router=express.Router();

//signup route
router.post("/signup", (req, res)=>{
    userModal.find({email:req.body.email}).then((data=>{
        if(data.length){
            res.status(400).send("user already exist")
        }else{
            generatePassword(req.body.password).then((passwordHash)=>{
                userModal.create({email:req.body.email , password:passwordHash}).then(()=>{
                    res.status(200).send("User added successfully")
                }).catch((err)=>{
                    res.status(400).send(err)
                })  
            })
            
        }
    }))
});

//login route
router.post("/login", (req, res)=>{
    //console.log(req.body)
    userModal.find({email:req.body.email}).then((data=>{
        if(data.length){
            bcrypt.compare(req.body.password, data[0].password).then((value)=>{
                if(value){
                    const authToken=jwt.sign(data[0].email, process.env.SECRET_KEY);
                    res.status(200).send(authToken)
                }else{
                    res.status(400).send("Invalid password");
                }
            })
        }else{
            res.status(400).send("Unauthorized user")
        }
    }))
})

router.get("/get", async(req,res)=>{
    try{
        const user_email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
       const result=await ContactModal.find({email:user_email})
       res.send(result)
       console.log(result)
    }catch(err){
            console.log(err)
        }
})
//for user to logout we will do it in front end part
//just need to delete authtoken from the where we have stored

module.exports=router;