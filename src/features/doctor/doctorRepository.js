import mongoose from 'mongoose';
import { doctorSchema } from './doctorSchema.js';

const doctorModel = mongoose.model('Doctors', doctorSchema);

export default class DoctorRepository {
    async register(name, email, password) {
        try {
            const newUser = new doctorModel({ name, email, password });
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            // Handling different types of errors
            if (error instanceof mongoose.Error.ValidationError) {
                console.error('Validation Error:', error.message);
                throw new Error('Validation Error: ' + error.message);
            } else if (error.code === 11000) { // MongoDB duplicate key error code
                console.error('Duplicate Key Error:', error.message);
                throw new Error('Duplicate key error: email already registered');
            } else {
                console.error('Unexpected Error:', error.message);
                throw new Error('Unexpected error occurred while registering new user');
            }
        }
    }

    async findByEmail(email){
        try {
            let doctor=await doctorModel.findOne({email});
            return doctor;
        } catch (error) {
            console.log(err);
            throw new error("error logging in")
        }
    }


}
