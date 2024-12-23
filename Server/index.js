import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Router/route.js";

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
app.use('/listings', router);

// MongoDB Connection
const uri = "mongodb://127.0.0.1:27017/listings";

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("Failed to connect to MongoDB:", err));

// Start the Server
const port = 5000;
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
