const bcrypt=require('bcrypt');



const users=[
    {
        name:'admin',
        email:'admin@admin.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true},

 {
     name:'syedNoor',
    email:'snoorulhuda220@gmail.com',
    password:bcrypt.hashSync('123456',10)},
 {
 
    name:'user',
 email:'user@user.com',
 password:bcrypt.hashSync('123456',10)},
    ];

    module.exports=users