const passPort = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using the passport 
passPort.use(new LocalStrategy({
    usernameField:'email'
},
  function(email,password,done){
    // if find a user then istablish the identity 
    User.findOne({email:email},function(err,user){
        if(err){
            console.log("error in finding user --> passport");
            return done(err);
        }
        if(!user || user.password != password){
          console.log('Invalid Username/password');
          return done(null,false);
        }
        return done(null,user);
    });  
  }
  ));
  // seriallizing the user means the field that we want to keep encrypted
passPort.serializeUser(function(user,done){
  done(null,user.id);
})
// deserilizing means when user log in then looking for the request the have been made 
passPort.deserializeUser(function(id,done){
 User.findById(id,function(err,user){
   if(err){
     console.log('Error in finding an user --> passport');
     return done(err);
   }
   return done(null,user);
 })
});

 // to check whether the user id authenticated or not 
 passPort.checkAuthenticate = function(req,res,next){
  // if the user is signed in then pass on the request to the function(controller;s action)
  if(req.isAuthenticated()){
    return next();
  }

  // if the user is not signed in 
  return res.redirect('/user/sign-in');
 }

 passPort.setAuthenticatedUser = function(req,res,next){
  if(req.isAuthenticated()){
    // req.user contains the cureent signed in user from the session cookies and we are just sending this to the local for the views
    res.locals.user = req.user;
    return next();
  }
 }


module.exports = passPort;
