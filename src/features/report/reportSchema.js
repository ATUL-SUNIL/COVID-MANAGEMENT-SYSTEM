import mongoose from 'mongoose'

export const reportSchema=new mongoose.Schema({
    createdBy_doctor:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'doctor id required'],
        ref:'Doctor'
    },
    status:{
        type:String,
        required:[true,"status is required"],
        enum:['Negative', 'Travelled-Quarantine',
             'Symptoms-Quarantine','Positive-Admit']
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:[true,'patient id required']
    },
    date:{
        type:Date,
        default:Date.now   
    }
})