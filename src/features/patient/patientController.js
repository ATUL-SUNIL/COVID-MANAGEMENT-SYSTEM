import { PatientRepository } from "./patientRepository.js";
export class PatientController{
    constructor(){
        this.repository=new PatientRepository();
    }
    async register(req,res,next){
        try {
            const {name,phone}=req.body;
            const registeredPatient=await this.repository.findByPhone(phone);
            if(registeredPatient){
                return res.status(201).send("patient already registered"+registeredPatient)
            }
            const patient=await this.repository.register(name,phone)
            res.status(201).send(patient)
        } catch (err) {
            // console.log(err)
            res.send(err.message)
            next(err)
        }
    }

    async createReport(req,res,next){
        try {
            
            const doctorId=req.doctorId;
            const patientId=req.params.id;
            const {status}=req.body;
            const report=await this.repository.createReport(patientId,doctorId,status);
            res.status(201).send(report);
        } catch (error) {
            res.send(error.message)
            next(error)
        }
    }

async getReports(req,res,next) {
    try {
        const patientId=req.params.id;
        const reports=await this.repository.getReports(patientId)
        if(!reports){
            return res.status(404).send("no reports found");
        }
        res.status(201).send(reports);
    } catch (error) {
        res.send(error.message)
        next(error)
    }
}   
}