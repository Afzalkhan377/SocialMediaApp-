import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
/*register user*/
export const register =async(req,res)=>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,

        }=req.body;
        
        const sale=await bcrypt.genSalt();
        const passwordHash=await bcrypt.hash(password, salt);
        const newUser=new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random()*10000),
            impressions: Math.floor(Math.random()*10000)

        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status (500).json({error: err.message});
    }
};
/*logging in*/
export const login=async (req,res)=>{
    try{
        const{email, passowrd}=req.body;
        const user=await User.finone({email:email});
        if (!user) return res.status(400).json({msg: "User does not exist. "});
        const isMatch=await bcrypt.compare(passsword, user.password);
        if (!isMatch) return  res.status(400).json({msg: "Invalid Credentials. "});
        const token=jwt.sign({id: user._id}, "HISTORICAL.321");
        delete user.password;
        res.status(200).json({token, user});
    
    }catch(err){
        res.status(500).json({error: err.message});
    }
}