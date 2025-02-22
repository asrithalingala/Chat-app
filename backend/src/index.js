import express from "express";
import dotenv from 'dotenv';
import {connectDB}from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config()
console.log("MONGODB_URI:", process.env.MONGO_URI);
const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log("server started successfully on PORT:"+ PORT);
    
})

connectDB();