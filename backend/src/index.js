import express from "express";
import cookieParser from "cookie-parser"
import dotenv from 'dotenv';
import {connectDB}from "./lib/db.js"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config()
const app = express();
console.log("MONGODB_URI:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5001;
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messgae", messageRoutes)

app.listen(PORT, ()=>{
    console.log("server started successfully on PORT:"+ PORT);
    
})

connectDB();