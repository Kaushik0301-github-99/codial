const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const layouts = require('express-ejs-layouts');
// in using the connect mongo we need to pass an argument to tell that we are going to use the 

// telling to use the mongo config that we have configured into the config folder

const db = require('./config/mongoose');

// used for the session cookie
const session = require('express-session');
const passPort = require('passport');
const passportLocal = require('./config/passport-startegy-local');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
   src:'./assests/scss',
   dest:'./assests/css',
   debug:true,
   outputStyle:'extended',
   prefix:'/css',
}))

// setting up an middleware to listen the post request 
app.use(express.urlencoded());
// telling the app to use the cookieparser
app.use(cookieParser());

// if we want to use the static file into the head of the html file then we will have to extract those here 
app.use(express.static('./assests'));


app.use(layouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// telling an app to use the express layout 
//  setting up the view engine
 app.set('view engine','ejs');
 app.set('views','./views');




   // creating a function where we will use the connect mongo to store the sessions cookies in db 
   // in order to encrypt an cookie we will have to set an middleware 
   // that secret key is provided for the decripting a cookie 
   // TODO change the secret at the time of production 
   
   app.use(session({
      name : "codial" , 
      resave : false , 
      secret :  'blahsomething', 
      saveUninitialized : false , 
      cookie : {
          maxAge : (1000 * 120 * 60 ) 
      },
      store: MongoStore.create({
                   mongoUrl: 'mongodb://localhost/codial_development'
          })
   }));

   app.use(passPort.initialize());
   app.use(passPort.session());
   // to use the express routers here 
   app.use(passPort.setAuthenticatedUser)
   app.use('/',require('./routes'));
   

   
   
   
app.listen(port,function(err){
 if(err){
    console.log(`the server is not setup on ${err}`);
 }
 console.log(`the server is fire and running on the port ${port}`);
});