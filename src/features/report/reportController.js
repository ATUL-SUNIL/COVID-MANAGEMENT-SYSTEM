import ReportRepository from "./reportRepository.js";

export default class ReportController{
    constructor(){
        this.repository=new ReportRepository();
    }
    async getReportsByStatus(req,res,next){
        try {
            const {status}=req.body;
        const allowedStatuses = ['Negative',
             'Travelled-Quarantine', 'Symptoms-Quarantine',
              'Positive-Admit'];
        if (!allowedStatuses.includes(status)) {
            return res.status(400).send("Invalid status value");
        }
        const reports=await this.repository.getReportsByStatus(status)
        if(reports){
            res.status(201).send(reports);
        }
        else{
            return res.status(404).send("no reports found");
        }
        } catch (error) {
            console.log(error)
            res.send(error.message)
            next(error)
        }
        
    }
}