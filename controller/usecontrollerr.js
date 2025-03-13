
const useModel=require("../model/usemodel")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const signup=async (req,res)=>{
    const {username,email,password}=req.body
    try{
        const user=await useModel.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await useModel.create({
            username,
            email,
            password:hashedPassword
        })
        return res.status(201).send("signup successfull")
    }catch(error){
        console.log(error)
    }
}

const login=async (req,res)=>{
    const {email,password}=req.body
    try{
        const user=await useModel.findOne({email})
        if(!user){
            return ("user not found")
        }
        const ispasswordvalid=await bcrypt.compare(password,user.password)
        if(!ispasswordvalid){
            return res.status(400).json({message:"Invalid password"})
        }
        const token=jwt.sign({
            id:user._id,
            email:user.email
        },"private-key",{expiresIn: "1h"})
        return res.status(200).json({token})
    }catch (error){
        console.log(error)
    }
}

module.exports={signup,login}