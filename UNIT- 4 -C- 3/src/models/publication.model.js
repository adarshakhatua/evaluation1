const mongoose=require("mongoose");


const publicationSchema =new mongoose.Schema({
    name  :{type:String, required:false, default:0},
},
{
    versionKey:false,
    timestamps:true,
})


const Publication =mongoose.model("publication", publicationSchema);
module.exports=Publication;