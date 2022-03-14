const express= require("express");
const mongoose= require("mongoose");

const app=express()

//connect to database
const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/bank")
}


//creating  User schema

//1 creating schema
const userSchema= new mongoose.Schema(
    {
        firstName:{type:String,required:true,},
        middleName :{type:String,},
        lastName :{type:String,required:true,},
        age :{type:Number,required:true,},
        email :{type:String,required:true,unique:true,},
        address :{type:String,required:true,},
        gender :{type:String,required:true,default:"Female"},
        type :{type:String,default:"customer"},
    },
    {
        versionKey:false,
        timestamps:true,
    }

)

//2:creating model
const User=mongoose.model("user",userSchema);


//creating BranchDetail schema

//1 creating schema
const BranchDetailsSchema= new mongoose.Schema(
    {
        name:{type:String,required:true,},
        address :{type:String,required:true,},
        IFSC :{type:String,required:true,},
        MICR  :{type:String,required:true,},
    },
    {
        versionKey:false,
        timestamps:true,
    }

)

//2:creating model
const BranchDetail=mongoose.model("BranchDetails",BranchDetailsSchema);

//creating MasterAccount schema

//1 creating schema
const MasterAccountSchema= new mongoose.Schema(
    {
        balance:{type:Number,required:true,},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
        nominees :[{type:mongoose.Schema.Types.ObjectId, ref:"user",}],
        relationship_managerId:{type:mongoose.Schema.Types.ObjectId, ref:"user",required:true},
        branchId:{type:mongoose.Schema.Types.ObjectId,ref:"BranchDetails",required:true,}
    },
    {
        versionKey:false,
        timestamps:true,
    }

)

//2:creating model
const MasterAccount=mongoose.model("MasterAccount",MasterAccountSchema);

//creating SavingsAccount Schema

const SavingsAccountSchema= new mongoose.Schema(
    {
        account_number :{type:Number,required:true,unique:true},
        balance:{type:Number,required:true,},
        interestRate :{type:Number,required:true,},
        MasterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"MasterAccount",required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }

)

//2:creating model
const SavingsAccount=mongoose.model("SavingsAccount",SavingsAccountSchema);


//creating FixedAccount schema

const FixedAccountSchema= new mongoose.Schema(
    {
        account_number :{type:Number,required:true,unique:true},
        balance:{type:Number,required:true,},
        interestRate :{type:Number,required:true,},
        startDate:{type:Number,required:true,},
        maturityDate :{type:Number,required:true,},
        MasterAccountId:{type:mongoose.Schema.Types.ObjectId,ref:"MasterAccount",required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }

)

//2:creating model
const FixedAccount=mongoose.model("FixedAccount",FixedAccountSchema);

///-----------------CRUD operation---------------------/////


app.get("/masterAcoount",async(req,res)=>{
    try{
        const masterAccount=MasterAccount.find().populate("userId").lean().exec();
        return res.status(200).send(masterAccount)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }

})

app.post("/savingsAccount",async(req,res)=>{
    try{
        const savingsAccount=SavingsAccount.create(req.body).lean().exec();
        return res.status(200).send(savingsAccount)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }

})

app.post("/fixedAccount",async(req,res)=>{
    try{
        const fixedAccount=FixedAccount.create(req.body).lean().exec();
        return res.status(200).send(fixedAccount)
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }

})

app.get("/masterAccount/:masterAccountId/accounts",async(req,res)=>{
    try{
        const masterAccountId=MasterAccount.find({masterAccountId:req.params.masterAccountId}).lean().exec();
        const fixedAccount=FixedAccount.find({masterAccountId:req.params.masterAccountId})
        const savingsAccount=SavingsAccount.find({masterAccountId:req.params.masterAccountId})
        return res.status(200).send({fixedAccount:fixedAccount,
                                    savingsAccount:savingsAccount})
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
})




app.listen(7000,async()=>{
    try{
        await connect() 
        console.log("listening at port :7000")
    }
    catch(err){
        console.log(err)
    }
    
})