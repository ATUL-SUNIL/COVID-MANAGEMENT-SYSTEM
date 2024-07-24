import express from "express";
import ReportController from "./reportController.js";

 const ReportRouter=express.Router()
const reportController=new ReportController();

ReportRouter.get('/status',(req,res,next)=>{
    reportController.getReportsByStatus(req,res,next)
})


 export default ReportRouter;