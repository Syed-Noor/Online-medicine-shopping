const asyncHandler=require('express-async-handler');
const Contact = require('../models/ContactFormModel');
const express =require ('express')

const addComments=asyncHandler (async(req,res)=>{
    const contact=await Contact.findById(req.user._id)
         if (contact) {
          res.json(
              {
                  
                  email:contact.email,
                  address:contat.address,
                  comments:contact.comments
                 
              }
          );
         } else {
             res.status(404);
             throw new Error("Comments are not delivered");
         }   
}
 );
 module.exports={addComments}