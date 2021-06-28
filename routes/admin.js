// require built-in modules
var express = require('express');
var router = express.Router();

// require custom modules
var appointmentSchema= require('../models/appointments')

var requestInfo = function(req, res, next){
    req.time= Date.now();
    console.log(req.time);
    next();
}
router.use(requestInfo);

// get all appointments
router.get('/',(req,res,next)=>{
    res.send('system admin');

});

module.exports= router;