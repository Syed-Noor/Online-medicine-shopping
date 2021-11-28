const mongoose=require('mongoose');
const dotenv=require('dotenv');
const users=require('./data/users');
const User=require('./models/UserModel');
const Product=require('./models/ProductModel');
const Order=require('./models/OrderModel');
const product=require('./data/products');
const connectDb =require('./config/config');
const products = require('./data/products');
const Seller = require('./models/SellerModel');
const Additem=require('./models/AdditemModel')

dotenv.config();
connectDb();

const importData= async()=>{
  try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
      await Seller.deleteMany()
      await Additem.deleteMany()
      const createUser =await User.insertMany(users)
      const adminUser=createUser[0]._id
      const sampleData=products.map(product=>{
          return{...product,User:adminUser}
      })
      await Product.insertMany(sampleData)
      console.log('Data Imported Mubarak shaaaaaaaaaaaaa!!')
      process.exit();
  } catch (error) {
      console.log(`${error}`)
      process.exit(1);
  }
};
const dataDestroy=async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany();
        await Seller.deleteMany();
        await Additem.deleteMany();
        console.log('Data Destroyed!!!Unfortunately');
        process.exit(1);
    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
   
   
}
if (process.argv[2]=== "-d") {
    dataDestroy()
} else {
    importData();
}