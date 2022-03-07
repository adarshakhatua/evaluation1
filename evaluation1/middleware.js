const express=require ("express");
const app=express();
app.use(logger);

app.listen(5000,()=>{console.log("listening in port:5000")})
app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
})
app.get("/libraries",checkPermission,(req,res)=>{
    return res.send({ route: "/libraries", permission: req.permission})
})
app.get("/authors",checkPermission,(req,res)=>{
    return res.send({ route: "/authors", permission: req.permission})
})


function logger(req,res,next){
    if(req.path=="/authors"){
        console.log("authors")
    }
    if(req.path=="/libraries"){
        console.log("libraries")
    }
    if(req.path=="/books"){
        console.log("books")
    }
    
    next();
}
var checkpermission=true;
function checkPermission(req,res,next){
    if(req.path=="/authors"){
        console.log("authors")
        req.permission=true;
    }
    if(req.path=="/libraries"){
        console.log("libraries")
        req.permission=true;
    }
   console.log("check")
    
    next();
}
