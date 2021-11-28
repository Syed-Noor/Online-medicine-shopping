const mongoose=require('mongoose');

 const Schema= mongoose.Schema; 

const AdditemsSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        contentType:String,
        required:true
    },
    description:{
        type:String,required:true
    },
    category:{
        type:String,required:true
    },
    price:{
        type:Number,
        required:true
    },
    // countInStock:{
    //     type:Number,required:true
    // },
    postDate:{
        type:Date, default:Date.now
    },
})

const Additem =mongoose.model('Additem',AdditemsSchema)

module.exports=Additem;