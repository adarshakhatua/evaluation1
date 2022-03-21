const express= require("express");
const Book =require("../models/book.model");
const multer  = require('multer')
const path= require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()
      cb(null,uniquePrefix+ '-' + file.originalname)
    }
  })


  const fileFilter = (req, file, cb)=> {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  if(file.mimetype=="image/jpeg" ||file.mimetype =="image/png"){
     // To accept the file pass `true`, like so:
     cb(null, true)
  }
  else{
    // To reject this file pass `false`, like so:
    cb(null, false)
  }
    
  }

const option={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5,
    }

}
const upload = multer(option)

const router= express.Router();

router.post("",upload.single("coverImage"),async(req,res)=>{
    try{
  
        const book =await Book.create(req.body)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


router.get("",async(req,res)=>{
    try{

        const pagesize=req.query.pagesize;
        const page=req.query.page;
        const skip= (page-1)*pagesize;
        console.log(body("firstName"))
        const user =await User.find().skip(skip).limit(pagesize).lean().exec();
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})




module.exports=router