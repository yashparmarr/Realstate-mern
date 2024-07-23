import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
   .connect("mongodb+srv://yash20545:UwE8nuSoM2coHqS2@mern-estate.of6uiz0.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")
   .then(() => {
    console.log('Connected to MongoDb') 
    })
   .catch((err) => {
      console.log(err);
   });

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(3000,() => {
   console.log('Console is running on port 3000');
});

app.use("/api/user", userRouter); 
app.use("/api/auth",authRouter);
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
       success:false,
       statusCode,
       message
    })
});