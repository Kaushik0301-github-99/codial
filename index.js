const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){
 if(err){
    console.log(`the server is not setup on ${port}`);
 }
 console.log(`the server is fire and running on the port ${port}`);
})