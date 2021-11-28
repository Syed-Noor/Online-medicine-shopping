const express = require('express');
const asyncHandler=require('express-async-handler')
const Order=require('../models/OrderModel')

const addOrderItem=asyncHandler(async(req,res)=>{
    const  {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,shippingPrice,
        totalPrice}=req.body;

 if(orderItems && orderItems.length ===0){
        res.status(400)
        throw new Error('NO Order Found');
        return;
    }else{
          const order=new Order({
                orderItems,
                // user:req.user.id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,shippingPrice,
                totalPrice
                
            })
            
            const createOrder=await order.save()
            res.status(201).json(createOrder)
           
           
        }
    }
);
//Get orders by id
const getOrderById=asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params._id).populate( 'user', 'name', 'email')
    
    if(order){
        res.json(order)
        // console.log(order)
      
    }else{
        res.status(404)
        throw new Error('Order not Found')
    }
})
//paidendpoints
const updateOrderToPaid=asyncHandler(async(req,res)=>{
    const order=  await Order.findById(req.params._id)
    if(order){
         order.isPaid=true,
        order.paidAt=Date.now(),
         order.paymentResult={
             id:req.body.id,
             status:req.body.status,
             updata_time:req.body.update_time,
             email_address:req.body.payer.email_address,
         };

         const updateOrder=await order.save();
          res.json(updateOrder);
    }
    else{
        res.status(404);
        console.log('Order Not Found')
        throw new Error('Order Not Found')
    }
});


const getMyOrders=asyncHandler(async(req,res)=>{
    const orders=await Order.find({user:req.user._id})
   res.json(orders)
   
    
})

module.exports={addOrderItem,getOrderById,updateOrderToPaid,getMyOrders}