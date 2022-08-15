const express=require("express");
const ContactModal=require("../modal/ContactModal");
const jwt =require("jsonwebtoken")

const router=express.Router()

router.get("/get",async (req,res)=>{
    try{
        const user_email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
       const result=await ContactModal.find({user_email:user_email})
       res.send(result)
    //    console.log(result)
    }catch(err){
            console.log(err)
        }
})



router.post("/add", (req, res)=>{
    const user_email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    ContactModal.create({user_email:user_email,name:req.body.name, designation: req.body.designation, company:req.body.company, industry: req.body.industry, email:req.body.email, phonenumber:req.body.phonenumber, country:req.body.country}).then(()=>{
        res.status(200).send("Post created successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
});


router.post("/delete", (req, res)=>{
    const id=req.body.id;
    ContactModal.findByIdAndDelete({_id:id}).then(()=>{
        res.status(200).send("Removed from contact")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.post("/alldelete",(req,res)=>{
    let data=req.body;
    data.forEach(element => {
        ContactModal.findByIdAndDelete({_id:element}).then(()=>{
            res.write("romoved")
        }).catch((err)=>{
            res.status(400).send(err)
        })
    });
    res.end()
})
module.exports=router