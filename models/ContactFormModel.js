const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const contactSchema=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        comments:{
            type:String,
            required,
        }
        

    },{timestamps:true}
)



    
const Contact=mongoose.model('Contact',conatctSchema)
module.exports= Contact;