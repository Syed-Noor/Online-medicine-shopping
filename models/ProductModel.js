const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    Comment:{
        type:String,
        required:true
    },

},{
    timestampes:true
})

const ProductSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',

    },
    name:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:true,

    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },

    reviews:[reviewSchema],
    rating:{
        type:String,
        required:true,

    },
    numReviews:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    }

});

const Product = mongoose.model('Product',ProductSchema);
module.exports= Product; 