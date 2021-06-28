// require built-in modules
var express = require('express');
var router = express.Router();

// require custom modules
var appointmentSchema = require('../models/appointments')

router.get('/', (req, res, next) => {
    console.log(Date.now());
    next();
});

router.get('/', (req, res) => {
    appointmentSchema.find(function (err, appointments) {
        res.json(appointments);
    })
    // res.send('all users');

});

// request appointment
router.post('/appointment', (req, res) => {
    let newAppointment = new appointmentSchema({
        // firstName:req.body.firstName,
        // fatherName:req.body.fatherName,
        // email:req.body.email

        site: req.body.site,
        city: req.body.city,
        deliverySite: req.body.deliverySite,
        date: req.body.date,
        time: req.body.time,
        personalInfo: {
            firstName: req.body.firstName,
            fatherName: req.body.fatherName,
            birthPlace: req.body.birthPlace,
            email: req.body.email,
            phone: req.body.phone,
            martialStatus: req.body.martialStatus,
            passportPage: req.body.passportPage,
            birthCertificate: req.body.birthCertificate

        }
    });

    newAppointment.save(function (err, result) {
        if (err) {
            res.status(500).json({  success: false, msg: 'Failed to add new appointment' });
        }
        else {
            res.json({ success: true, msg: 'Appointment added successfully',result: result });
        }

    });
});

// update appointments
router.put('/appointment/:id', (req, res) => {

});

// delete appointments
router.delete('/appointment/:id', (req, res) => {
    appointmentSchema.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;