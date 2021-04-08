const ctrlUsers={}

const userModel = require('../models/user')

ctrlUsers.getUsers= async (req,res)=>{
    const users= await userModel.find()
    res.json(users)
}
ctrlUsers.createUser= async (req,res)=>{
    const { username,date }=req.body
    const newUser = new userModel({username,date})
    await newUser.save()
    res.json({message:'Creted Note'})
}
ctrlUsers.getUser= async (req,res)=>{
   const user= await userModel.findById(req.params.id)
    res.json(user)
}
ctrlUsers.updateUser=async (req,res)=>{
    const { username,date }=req.body
     await userModel.findOneAndUpdate(req.params.id,{username,date}) 
    res.json({message:'Updated Note'})
}
ctrlUsers.deleteUser=async (req,res)=>{
    await userModel.findOneAndDelete(req.params.id)
    res.json({message:'Delete User'})
}

module.exports=ctrlUsers