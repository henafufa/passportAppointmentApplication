// connection to database
var mongoose= require ('mongoose');

const DATABASENAME='passportservice';
const DATABASEURL ='mongodb://localhost/passportservice';

// mongoose.connect('mongodb://127.0.0.1:27071/passportservice',{ useNewUrlParser: true})  not worked for me
mongoose.connect(DATABASEURL,{ useNewUrlParser: true});

console.log(mongoose.connection.readyState); //logs 0
mongoose.connection.on('connecting', () => { 
  console.log('connecting')
  console.log(mongoose.connection.readyState); //logs 2
});
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 27071');
  console.log(mongoose.connection.readyState); //logs 1
});
mongoose.connection.on('disconnecting', () => {
  console.log('disconnecting');
  console.log(mongoose.connection.readyState); // logs 3
});
mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
  console.log(mongoose.connection.readyState); //logs 0
});
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in database connection'+ err);
    }
});

module.exports= mongoose;