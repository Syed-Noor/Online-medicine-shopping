// const { message } = require('antd');
// const express=require('express')
// const router=express.Router();

// const Razorpay=require('razorpay');
// const request=require('request');
// const { razorIdkey, razorIdSecret } = require('../keys');

// const keys=require('../keys');
// const razorInstance= new Razorpay ({
//      key_id:keys.razorIdkey,
//      key_secret:keys.razorIdSecret
// })
// router.get('/order',(req,res)=>{
//     try{
//         const options={
//             amount:10*100,
//             currency:"PKR",
//             receipt:'receipt#1',
//             payment_capture:0

//         };
//         razorInstance.orders.create(options,async function(err,order){
//             if(err){
//                 return res.status(500).json({
//                     message:"something error is"
//                 })
//             }
//             return res.status(200).json(order)
//         }
//         );
//     }
//     catch(err){
//         return res.status(500).json({
//             message:'something error is'
//         })
//     }
// })

// router.post('/capture/:paymentId',(req,res)=>{
//     try{
//         return request(
//             {
//                 method:"POST",
//                 url:`http://${keys,razorIdkey}:${keys,razorIdSecret}@api.razorpay.com/v1/payment/${
//                     req.params.paymentId}/capture`,
//                     form:{
//                         amount:10*100,
//                         currency:"PKR",
// },
//             },
//             async function(err,response,body){
//                 if(err){
//                     return res.status(500).json({
//                         message:"something error is"
//                     })
//                 }
//                 return res.status(200).json(body)
//             }
            
//         )
//     }
//     catch(err){
//         return res.status(500).json({
//             message:err.message
//         })
//     }
// })

// module.exports=router;