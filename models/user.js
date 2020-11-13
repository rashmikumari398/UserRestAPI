const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
     email:{type:String,required:[true,'email is required']},
     age:{type:Number,required:[true,'age is required'],min:21,max:60},
     firstName:{type:String,required:[true,'firstName is required']},
     lastName:{type:String,default:"NA"}
 })

 const User = mongoose.model('User',userSchema);

module.exports=User;