const express=require('express');
const router =express.Router();
const {addComments} =require('../controllers/contactController')
const {protect}=require('../Middleware/authMiddleware')

router.route('/comments').get('protect',addComments)