// in order to connect to the database we need to access the moongoose which is the odt of the mongoDB datbase 
// in order to make a field we need to add the schema here

// accesing the database
const mongoose = require('mongoose');

//creating a schema which will help us to build a field into the database 
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
      type:String,
      required:true,
    },
    name:{
        type:String,
        required:true,
    },
},{
    //this timestamp will keep store the last login which moongoes provides us 
    timestamps:true,
});

// telling the mongooes about the model that we have User is the model name and userSchema is the schema that we are using here 
const User = mongoose.model('User',userSchema);

module.exports = User;