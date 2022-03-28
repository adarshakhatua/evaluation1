const User = require("../models/user.model")
require('dotenv').config()
var jwt = require('jsonwebtoken');

const generateToken =(user)=>{
    const token = jwt.sign({ user }, process.env.KEY);
    return token;
}



const register = async(req,res)=>{
   try{
       const email = await User.findOne({email:req.body.email}).lean().exec();
       if(email){
          return  res.status(400).send({message:"email is already registered."})
       }
    
    const user = await User.create(req.body);
    return res.status(201).send(user);
   }
   catch(err){
    return   res.status(500).send({message:err.message})
   }
}


const login = async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email}).lean().exec();

        if(!user){
           return  res.status(400).send({message:"email is not valid."})
        }

        const match = user.verifyPassword(req.body.password);
        if(!match){
            res.status(400).send({message:"password is not correct"});    
        }
        const token =generateToken(user)
        return res.status(200).send({user:user,token:token});
    }
    catch(err){
     return   res.status(500).send({message:err.message})
    }
 }

module.exports ={register,login};
