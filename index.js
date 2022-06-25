const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const layouts = require('express-ejs-layouts');

// telling to to use the mongo config that we have configured into the config folder

const db = require('./config/mongoose');

// setting up an middleware to listen the post request 
app.use(express.urlencoded());
// telling the app to use the cookieparser
app.use(cookieParser());
// telling an app to use the express layout 
app.use(layouts);

app.use(express.static('./assests'));

// if we want to use the static file into the head of the html file then we will have to extract those here 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// to use the express routers here 
 app.use('/',require('./routes'));

//  setting up the view engine
 app.set('view engine','ejs');
 app.set('views','./views');

app.listen(port,function(err){
 if(err){
    console.log(`the server is not setup on ${port}`);
 }
 console.log(`the server is fire and running on the port ${port}`);
})