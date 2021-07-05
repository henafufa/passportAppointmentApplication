var mongoose = require('mongoose');

// const appointmentSchema = mongoose.Schema({
//     // _id: mongoose.Schema.Types.ObjectId,
//     site: {
//         type: String,
//         required: false
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     deliverySite: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: String,
//         required: true
//     },
//     time: {
//         type: String,
//         required: true
//     },
//     personalInfo: {
//         type: mongoose.Schema.Types.Object,
//         ref: 'Personal',
//         // required: true
//     }

// })

const appointmentSchema= mongoose.Schema({
    firstName:{
        type:String
    },
    fatherName:{
        type:String
    },
    email:{
        type:String
    }

});

var appointment = module.exports = mongoose.model('appointment', appointmentSchema)