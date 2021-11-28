const Seller=require('../models/SellerModel')
const asyncHandler=require('express-async-handler');
const generateToken =require('../utils/generateToken');

const registerSeller=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const sellerExit=await Seller.findOne({email})
    if (sellerExit) {
        res.status(400);
        throw new Error('Seller Already Exist!!')
        
    } 
    const seller=await Seller.create({name ,email,password})
    if(seller){
        res.status(201).json({
            _id:seller._id,
            name:seller.name,
            email:seller.email,
            
            token:generateToken(seller._id),
        })
    }else{
        res.status(404);
        throw new Error('Seller Not Found');
    }
})

module.exports={
    registerSeller
}
