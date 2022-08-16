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



router.post("/add", async (req, res)=>{
    const data=req.body;
    const user_email = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    await data.forEach((element)=>{
        createContact(element,user_email)
    })
    res.end()
});

const createContact=async (data,user_email)=>{
       await ContactModal.create({user_email:user_email,name:data.name, designation: data.designation, company:data.company, industry: data.industry, email:data.email, phonenumber:data.phonenumber, country:data.country})
    
}

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