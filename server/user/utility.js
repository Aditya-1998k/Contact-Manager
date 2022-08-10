const bcrypt=require("bcryptjs");

const generatePassword=(password)=>{
    const salt=10;
    let hash="";
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(salt).then((saltHash)=>{
            bcrypt.hash(password, saltHash).then((passwordHash)=>{
                resolve(passwordHash)
            })
        })
    })
}
module.exports=generatePassword;