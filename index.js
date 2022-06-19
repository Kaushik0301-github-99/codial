const express = require('express');
const app = express();
const port = 8000;

// to use the express routers here 
 app.use('/',require('./routes'));

//  setting up the view engine
 app.set('view-engine','ejs');
 app.set('views','./views');

app.listen(port,function(err){
 if(err){
    console.log(`the server is not setup on ${port}`);
 }
 console.log(`the server is fire and running on the port ${port}`);
})