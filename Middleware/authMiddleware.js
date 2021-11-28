const jwt =require ('jsonwebtoken');
const User=require('../models/UserModel');

const asyncHandler =require('express-async-handler')

const protect=asyncHandler (async(req,res,next)=>{
    let token;
    if(req.headers.Authorization && req.headers.Authorization.startsWith('Bearer'))
    try{
        token=req.headers.Authorization.split('')[1];
        const decode= jwt.verify(token,process.env.JWT_KEY);
        req.user=await User.findById(decoded.id).select('-password')
        next();
    }
    catch (error){
        console.error(error)
        res.status(401);
        throw new Error('NOT AUTHORIZED,TOKEN FAILED');
    }
    if(!token){
        res.status(401);
        throw new Error('Not Authorized,not token');
    }
    

})
module.exports= {protect};