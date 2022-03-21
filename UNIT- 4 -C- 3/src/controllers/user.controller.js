const express= require("express");
const User =require("../models/user.model");
const { body, validationResult } = require('express-validator')

const router= express.Router();



router.get("",async(req,res)=>{
    try{
        console.log(body("firstName"))
        const user =await User.find().lean().exec();
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.post("",
body("firstName").isString().isLength({min:3,max:30}).withMessage("first name length should be between 3 to 30"),
body("lastName").isString().isLength({min:3,max:30}).withMessage("first name length should be between 3 to 30"),
body("age").isNumeric().isLength({min:1,max:3}).isInt({gt:0,lt:151}).withMessage("age should be between 1 to 150"),
body("email").isString().isEmail().withMessage("email should be in a valid format"),
async(req,res)=>{
    try{
        // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        const user =await User.create(req.body)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})




module.exports=router

