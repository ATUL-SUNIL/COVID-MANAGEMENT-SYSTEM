import mongoose from "mongoose"
import { reportSchema } from "./reportSchema.js"
import { patientSchema } from "../patient/patientSchema.js";
const reportModel=mongoose.model('Reports',reportSchema)

export default class ReportRepository{
    async getReportsByStatus(status){
        try {
            const reports=await reportModel.find({status:status}).populate('patient').exec();
            return reports;
        } catch (error) {
            throw new Error('Error retrieving reports: ' + error.message);
        }
        
    }

}