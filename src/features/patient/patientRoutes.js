import express from "express";
import { PatientController } from "./patientController.js";
import jwtAuth from "../../middleware/auth.js";
const patientController=new PatientController();
const patientRouter=express.Router();


//for registering patient
patientRouter.post('/register',jwtAuth,(req,res,next)=>{
    patientController.register(req,res,next)
})
//for creating report
patientRouter.post('/:id/create_report',jwtAuth,(req,res,next)=>{
    patientController.createReport(req,res,next)
})
//for getting all report of a patient
patientRouter.get('/:id/all_report',jwtAuth,(req,res,next)=>{
    patientController.getReports(req,res,next)
})


export default patientRouter;