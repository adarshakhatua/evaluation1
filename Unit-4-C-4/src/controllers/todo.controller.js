const express = require("express");
const router = express.Router();
const authanticate=require("../middlewares/aythanticate")

const Todo = require("../models/todo.model");

router.post= ("",authanticate, async(req,res)=>{

   try{
    const todo =await Todo.create(req.body);
    res.status(201).send(todo)
   }
   catch(err){
       res.status(500).send({message:err.message})
   }
})

router.get= ("",authanticate, async(req,res)=>{

    try{
     const todo =await Todo.find().lean().exec();
     res.status(201).send(todo)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
 })
///GET /todos/:id
 router.get= ("/:id",authanticate, async(req,res)=>{

    try{
     const todo =await Todo.findById(id).lean().exec();
     res.status(201).send(todo)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
 })
////PATCH /todos/:id
 router.patch= ("/:id",authanticate, async(req,res)=>{

    try{
     const todo =await Todo.findByIdAndUpdate(req.params.id, req.body).lean().exec();
     res.status(201).send(todo)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
 })

////DELETE /todos/:id
 router.delete= ("/:id",authanticate, async(req,res)=>{

    try{
     const todo =await Todo.findByIdAndDelete(req.params.id).lean().exec();
     res.status(201).send(todo)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
 })



module.exports = router;