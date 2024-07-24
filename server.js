import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import doctorRouter from "./src/features/doctor/doctorRoutes.js";
import patientRouter from "./src/features/patient/patientRoutes.js";
import ReportRouter from "./src/features/report/reportRoutes.js";


//loading environment variables
dotenv.config();


const server=express();

//connecting to db 
connectDB();

//middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//routes
server.use('/api/doctors',doctorRouter)
server.use('/api/patients',patientRouter)
server.use('/api/reports',ReportRouter)

const PORT = process.env.PORT;

server.listen(PORT,()=>{
    console.log("server listening on port:"+PORT)
})