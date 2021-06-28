const mongoose = require('mongoose');
const PersonalInfoSchema= mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    firstName:{
        type: String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    birthPlace:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false
    },
    martialStatus:{
        type: String,
        required: false
    },
    passportPage:{
        type: String,
        required: false
    },
    birthCertificate:{ 
        type: String,
        required: false
     }

},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Personal = module.exports = mongoose.model('Personal', PersonalInfoSchema);