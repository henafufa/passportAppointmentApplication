// require built-in modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var logger = require('morgan');

// require custom modules
var userRoute = require('./routes/user');
var adminRoute = require('./routes/admin');
var dbConnection = require('./dbconnection');

// Constats
const PORTNUM = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade')

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser);
app.use(cors());
app.use(bodyParser.json());


// middlewares to call routes
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use(express.static(path.join(__dirname, 'public')));


// middlewares for crosspolicy
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.get('/', function (req, res) {
    res.send('care management');
});

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

app.listen(process.env.PORT || PORTNUM, () => {
    console.log('Server running on port', PORTNUM);
});