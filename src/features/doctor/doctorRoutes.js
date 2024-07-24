import express from "express";
import DoctorController from "./doctorController.js";

const doctorRouter=express.Router();
const doctorController=new DoctorController();

doctorRouter.post('/register',
    (req, res, next) =>
         { doctorController.register(req, res, next) });

doctorRouter.post('/login',
    (req, res, next) =>
        { doctorController.login(req, res, next) });


export default doctorRouter;