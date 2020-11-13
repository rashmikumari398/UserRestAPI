const User = require('../models/user');

const getUsers = async (req,res,next)=>{
    try{
        const users =await User.find();
        return res.json({data:users});
    }
    catch(err){
        return res.status(400).json(err);
    }
    
}

const createUser = async (req,res,next)=>{
    try{
        const user = new User(req.body);
        await user.save();
        return res.json({message:'ok'});
    }
    catch(err){
        return res.status(400).json(err);
    }
}

const getUserById = async(req,res,next)=>{
    try{
        const id = req.body._id;
        const user = await Book.findById(id);
        return res.json({data:user});
        
    }
    catch(err){
        return res.status(400).json(err);
    }
}

const updateUserById = async(req,res,next)=>{
    try{
        const id = req.body._id;
        await User.findByIdAndUpdate(id,req.body);
        return res.json({message:"Data updated Successfully"});
    }
    catch(err){
        console.log("catch")
        return res.status(400).json(err);
    }
}

const deleteUserById = async(req,res,next)=>{
    try{
        const id = req.body._id;
        const user = await User.findByIdAndDelete(id);
        return res.json({message:"Data deleted Successfully"});
        
    }
    catch(err){
        return res.status(400).json(err);
    }
}


module.exports={
    getUsers,createUser,getUserById,updateUserById,deleteUserById
}