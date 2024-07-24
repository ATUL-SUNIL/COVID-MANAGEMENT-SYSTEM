import mongoose from 'mongoose';
import { patientSchema } from './patientSchema.js';
import { reportSchema } from '../report/reportSchema.js';
import {ObjectId} from 'mongoose';

const patientModel=mongoose.model('Patients',patientSchema)
const reportModel=mongoose.model('Reports',reportSchema)
export class PatientRepository{


    async register(name,phone){
        try {
            const newPatient=new patientModel({name,phone})
            const savedPatient=await newPatient.save();
            return savedPatient;
        } catch (error) {
            // Handling different types of errors
            if (error instanceof mongoose.Error.ValidationError) {
                console.error('Validation Error:', error.message);
                throw new Error('Validation Error: ' + error.message);
            } else if (error.code === 11000) { // MongoDB duplicate key error code
                console.error('Duplicate Key Error: phone already registered');
                throw new Error('Duplicate key error: phone already registered');
            } else {
                console.error('Unexpected Error:', error.message);
                throw new Error('Unexpected error occurred while registering new user');
            }
        }
    }

    async createReport(patientId,doctorId,status){
        try {
            const newReport = new reportModel({
                createdBy_doctor: doctorId,
                status: status,
                patient:patientId
            });

            const savedReport=await newReport.save()

            const patient=await patientModel.findById(patientId)
            if (!patient) {
                throw new Error('Patient not found');
            }
            
            patient.report.push(savedReport._id);
            await patient.save();

            return savedReport;
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                console.error('Validation Error:', error.message);
                throw new Error('Validation Error: ' + error.message);
            } else if (error.code === 11000) { // MongoDB duplicate key error code
                console.error('Duplicate Key Error:');
                throw new Error('Duplicate key error');
            } else {
                console.error('Unexpected Error:', error.message);
                throw new Error('Unexpected error occurred while creating report');
            }
        }
    }

    async findByPhone(phone){
        const patient=await patientModel.findOne({phone:phone});
        
        return patient;
    }

    async getReports(patientId){
        try {
            const reports=await reportModel.find({patient:patientId}).populate('createdBy_doctor').exec();
            return reports;
        } catch (error) {
            throw new Error('Error retrieving reports: ' + error.message);
        }
    }

}