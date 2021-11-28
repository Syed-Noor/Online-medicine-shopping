const Product=require('../models/ProductModel')
const asyncHandler=require('express-async-handler');



const getProducts = asyncHandler (async(req,res)=>{
    const products =await Product.find({})
    // throw new Error('Some Error')
       res.json(products);
      
   });


const getProduct = asyncHandler (async(req,res)=>{
    const product =await Product.findById(req.params.id)
  if (product) {
      res.json(product);
  } else {
      res.status(404).json({message:"Product:not found!!"})
  }

//     var product=products.find((p)=>p._id === req.params.id);
//      res.json(product);
 });

 //vScreen
//  const getProducts2 = asyncHandler (async(req,res)=>{
//     const products2 =await Product.find({})
//     // throw new Error('Some Error')
//        res.json(products2);
      
//    });


// const getProduct2 = asyncHandler (async(req,res)=>{
//     const product2 =await Product.findById(req.params.id)
//   if (product2) {
//       res.json(product2);
//   } else {
//       res.status(404).json({message:"Product:not found!!"})
//   }
// });
 module.exports={getProducts,getProduct}