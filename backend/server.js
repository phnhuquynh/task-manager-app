const dotenv = require("dotenv").config();
const express=require("express");
const connectDB =require("./config/connectDB");
const mongoose=require("mongoose");
const Task=require("./model/taskModel");
const taskRoutes=require("./router/taskRoute");
const app=express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/tasks",taskRoutes);

const  PORT=process.env.PORT||5000

// app.get("/", (req, res)=>{
//     res.send("Homepage")
// });

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{           
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((err)=>{
        console.log(err);
    });

