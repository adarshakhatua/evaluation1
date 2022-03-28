const { promise } = require("bcrypt/promises");

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.KEY, function(err, decoded) {
            //console.log(decoded.foo) // bar
            if(err){
                return reject({message:"authorization token is not valid"});
            }
            return resolve(decoded)
          });
    })
}

const authanticate =async(req,res,next)=>{
    const token = req.headers.authorization;

    if(!token || !token.startsWith("Bearer ")){
        return res.status(400).send({message:"authorization token is not valid"})
    }

    try{
        await verifyToken(token.trim().split(" ")[1])
    }
    catch(err){
        return res.status(500).send({message:err.message})
    }
    next()
}


module.exports =authanticate;