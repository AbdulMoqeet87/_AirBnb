import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Router/route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Middleware
app.use(express.json()); 

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PATCH", "PUT"],
    credentials: true,
  })
);

// Routes
app.use('/user', router);
app.use('/host', router);

// MongoDB Connection
 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Start the Server
const port = 5000;
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
