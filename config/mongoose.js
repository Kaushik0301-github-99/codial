const mongoose = require('mongoose');

// connecting to the mongoose 
mongoose.connect('mongodb://localhost/codial_development');

// connection to the database 

const db = mongoose.connection;

// handling that whether we got connect or not 
db.on(Error,console.error.bind(console,"error occur during connecting to the database"));

// once we get connected to the database 

db.once('open',function(){
    console.log('connected to the database :: mongoDB');
})
module.exports = db;