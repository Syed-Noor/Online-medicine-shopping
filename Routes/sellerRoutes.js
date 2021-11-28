const express=require('express');
const router =express.Router();
const{registerSeller}=require('../controllers/sellerController')

const { Error } = require('mongoose');

const { protect }=require('../Middleware/authMiddleware');


//User Registration
router.route('/').post(registerSeller);



// post name email and password
router.post('/Slogin');



module.exports=router;