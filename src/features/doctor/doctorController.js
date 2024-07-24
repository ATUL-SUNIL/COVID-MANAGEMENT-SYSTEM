import { doctorSchema } from "./doctorSchema.js";
import bcrypt from 'bcrypt';
import DoctorRepository from "./doctorRepository.js";
import jwt from 'jsonwebtoken'

export default class DoctorController {
    constructor(){
        this.doctorRepository=new DoctorRepository();
    }
    async register(req,res,next){
        try {
            const {name,email,password}=req.body;
            const hashedPassword=await bcrypt.hash(password,12);
            const doctor=await this.doctorRepository.register(name,email,hashedPassword)
            res.status(201).send(doctor)
        } catch (err) {
            // console.log(err)
            res.send(err.message)
            next(err)
        }
    }

    async login(req, res, next) {
        try {
          const doctor = await this.doctorRepository.findByEmail(req.body.email);
          if (!doctor) {
            return res.status(400).send("user with this email not found");
          } else {
            const result = await bcrypt.compare(req.body.password, doctor.password);
            if (result) {
              const token = jwt.sign(
                { doctorId: doctor._id, email: doctor.email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
              );
              console.log(req.email);
              return res.status(200).send(token );
            } else {
              return res.status(400).send("incorrect password");
            }
          }
        } catch (err) {
          console.log(err);
          res.send(err.message)
        }
      }

    
}