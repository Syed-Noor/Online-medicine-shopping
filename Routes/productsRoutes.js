const express=require('express');
const router =express.Router();
const {getProducts,getProduct} =require('../controllers/productController')
const { Error } = require('mongoose');

// Get Routes for all products
router.route("/products").get(getProducts)

// Get Routes for single product
router.route("/products/:id").get(getProduct)



module.exports= router;