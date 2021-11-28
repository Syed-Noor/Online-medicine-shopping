const express= require('express');
require('color')
const {errorHandler}=require('./Middleware/errorMiddleware')
const products = require('./data/products');
const multer=require('multer')
// const products2=require('./data/Vproduct')
const dotenv = require('dotenv');
//connecting to mongodb
const connectDb = require('./config/config');
const cors=require('cors')

const productRoutes=require('./Routes/productsRoutes');
const usersRoutes=require('./Routes/UsersRoute');

const orderRoutes=require('./Routes/orderRoutes');
const sellerRoutes=require('./Routes/sellerRoutes')

const router = require('./Routes/productsRoutes');
const additemRoutes=require('./Routes/additemRoutes')

const razorpayRoutes =require('./Routes/razorpayRoutes')

const { route } = require('./Routes/productsRoutes');
const bodyParser = require('body-parser');

//dotenv configuration
dotenv.config();

//function call from config.js
connectDb();

const app=express();
// //For add new items

 




app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Middleware for bodyparser
app.use(express.json());
app.use(cors());


 app.get('/',(req,res)=>{
    res.send('<h1>Welcome to node server</h1>');
});
// routes
app.use('/api',productRoutes);
app.use('/api/users',usersRoutes);
app.use('/api/orders',orderRoutes);
app.use('/sellerScreen',sellerRoutes)
app.use('api/seller',sellerRoutes);
app.get("/api/config/paypal",(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})




const PORT= 9090;
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is runing in ${process.env.MODE_ENV} Mode on Port ${process.env.PORT}`)
});