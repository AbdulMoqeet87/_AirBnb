import fs from 'fs/promises';
import { User } from '../Models/UserSchema.js';

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






export const addNewUser = async (req, res) => {
    try {
      // Extract user data from the request body
      const { UserName, FirstName, LastName, Password, email, PhoneNo, city, role } = req.body;
  
      // Validate required fields
      if (!UserName || !FirstName || !LastName || !Password || !email || !PhoneNo || !city) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }
  
      // Check if email is already in use
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: "Email is already in use." });
      }
  
      // Create a new user instance
      const newUser = new User({
        UserName,
        FirstName,
        LastName,
        Password, // You can hash the password here if needed
        email,
        PhoneNo,
        city,
        role: role || "user" // Default role is 'user'
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Respond with success
      res.status(201).json({ success: true, message: "User created successfully.", data: newUser });
    } catch (error) {
      console.error("Error in addNewUser:", error);
      res.status(500).json({ success: false, message: "Failed to create user.", error: error.message });
    }
  };
  