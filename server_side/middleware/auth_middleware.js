const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
   const token = req.rawHeaders
   .filter(element => element.startsWith("access_token"))[0]
   .split("=")[1]
    jwt.verify(token, process.env.SECRET_KEY,(err,user)=>{
        if(!err){
            req.user = user
            next();
        }
    })
}

const verifyUser = (req,res,next)=>{
    if(req.user.role === 'admin'){
        return res.status(400).json({
            status:'fail',
            message:'you are not authorized',
        })
    }
    next();
}
const verifyAdmin = (req,res,next)=>{
    if(req.user.role === 'user'){
        return res.status(400).json({
            status:'fail',
            message:'you are not authorized',
        })
    }
    next();
}
module.exports = {
    verifyToken,
    verifyUser,
    verifyAdmin,
}