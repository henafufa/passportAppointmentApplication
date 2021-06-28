// require built-in modules
var express = require('express');
var app=express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

// require custom modules
var userRoute= require('./routes/user');
var adminRoute= require('./routes/admin');
var dbConnection= require('./dbconnection');

// Constats
const PORTNUM = 3000;

app.use(cors());
app.use(bodyParser.json());


// routes
app.use('/user',userRoute);
app.use('/admin',adminRoute);
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    res.send('care management');
});


app.listen(process.env.PORT || PORTNUM, ()=>{
    console.log('Server running on port',PORTNUM);
});