import mongoose from 'mongoose';

export const doctorSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },email: {
        type: String,
        required: true,
        unique: [true,"email already registered"],
        match: [/.+\@.+\../, "Please enter a valid email"],
      },
      password: {
        type: String,
        required: true
      }
});

const doctorModel=mongoose.model('Doctor',doctorSchema)
export default doctorModel;