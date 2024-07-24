import mongoose from 'mongoose'

export const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    phone:{
        type:String,
        required:[true,"phone number is required"],
        unique:[true,"phone number alreade registered"]
    },
    report:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report',      
    }]
})

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;