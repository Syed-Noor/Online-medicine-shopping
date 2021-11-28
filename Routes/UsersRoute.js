const express=require('express');
const router =express.Router();
const {authController,
    getUserProfile,
    registerUser,
    updateUserProfile
         }= require('../controllers/userController')
const { Error } = require('mongoose');

// const { protect }=require('../Middleware/authMiddleware')

//User Registration
router.route('/').post(registerUser);

// post email and password
router.post('/login',authController);

//get user profile private route
router
.route('/profile')
.get(getUserProfile)
.put(updateUserProfile);




module.exports= router;