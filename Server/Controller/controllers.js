import fs from 'fs/promises';
import { User } from '../Models/UserSchema.js';
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const  ReadFile= async(filePath)=>
{
    try{
        const data = await fs.readFile(filePath,"utf-8");
       const jdata= JSON.parse(data);
       return jdata;
       
    }
        catch (error) {
            console.error('Error in GET /:', error);
        }
    
}

export const ExportData= async(req, res) => {

    try{
    const data = await ReadFile('Properties.json');
    console.log("Requested");    
    res.json(data);
    }
    catch (error) {
        console.error('Error in GET /:', error);
        res.status(500).json({ error: 'Failed to read or parse file' });
    }
};



export const DataCheck = async (req, res) => {
    try {
      // Retrieve all ground owners from the database
      const user = await User.find();
  
      // Extract ground names from each ground owner
   
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  



export const ExportDataById= async(req, res) => {
    const { id } = req.params;
    console.log(id);
    try{
    const data = await ReadFile('Properties.json');
    const obj = data.find(item => item.id.toString() === id.toString());
    console.log("Requested",obj);    
    res.json(obj);
    }
    catch (error) {
        console.error('Error in GET /:', error);
        res.status(500).json({ error: 'Failed to read or parse file' });
    }
};



export const loginUser= async(req, res)=> {{

try {

console.log(req.body,"1");
const{email,password}=req.body;
const existingUser = await User.findOne({ email });
if(!existingUser){
  return res.status(400).json({ success: false, message: "User Doesn't exist"});
}
console.log(req.body,"2");
const isPasswordCorrect = await bcrypt.compare(password, existingUser.Password);
if(!isPasswordCorrect){
  return res.status(400).json({ success: false, message: "invalid password"});
}
console.log(req.body,"3");

const token= jwt.sign({id:existingUser._id}, process.env.JWT_SECRET,{expiresIn:"1h"});

res.status(200).json({existingUser,token});

} catch (error) {
  console.log(error);
  res.status(500).send("something went wrong");
}

}}


export const addNewUser = async (req, res) => {
    try {
      
      const { UserName, FirstName, LastName, Password, email, PhoneNo, city, role } = req.body;
  
      
      if (!UserName || !Password || !email || !PhoneNo ) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Email is already in use." });
      }
      const HashedPass= await bcrypt.hash(Password,12);

      const newUser = new User({
        UserName,
        FirstName,
        LastName,
        Password:HashedPass, 
        email,
        PhoneNo,
        city,
        role: role || "user" 
      });
  
      await newUser.save();
  
      // Respond with success
      res.status(201).json({ success: true, message: "User created successfully.", data: newUser });
    } catch (error) {
      console.error("Error in addNewUser:", error);
      res.status(500).json({ success: false, message: "Failed to create user.", error: error.message });
    }
  };
  