import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {UserModel} from '../models/user.js';

const router = express.Router();

router.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const user=await UserModel.findOne({username});
    if(user){
        return res.json({message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser=new UserModel({username,password:hashedPassword});
    res.json(user)
});
router.post("/login");
export{router as usersRouter};