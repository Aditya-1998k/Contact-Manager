const express=require("express");
const dataModal=require("../modal/dataModal");

const router=express.Router()

router.get("/data",async (req,res)=>{
    try{
       const result=await dataModal.find()
       res.send(result)
       console.log(result)
    }catch(err){
            console.log(err)
        }
 })

<<<<<<< HEAD
router.get("/searched",async (req,res)=>{
    try{
        const searched=await dataModal.find({name:req.body.name})
        res.send(searched)
        console.log(searched)
    }
    catch(err){
        console.log(err)
    }
})

router.post("/data",(req,res)=>{
    dataModal.create({name:req.body.name,
=======
router.post("/add",(req,res)=>{
    dataModal.create({
                    name:req.body.name,
>>>>>>> f5964d28dc2f5039c37b685ed7153642bfc666ef
                    designation:req.body.designation,
                    company:req.body.company,
                    industry:req.body.industry,
                    email:req.body.email,
                    phonenumber:req.body.phonenumber,
                    country:req.body.country,
                }).then((data)=>{
                    res.status(200).send("data added successfully")
                }).catch((err)=>{
                    res.send(err)
                })
})

router.delete("/remove/:id", (req, res)=>{
    dataModal.deleteOne({id:req.params._id}).then(()=>{
        res.status(200).send("Removed from contact")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router