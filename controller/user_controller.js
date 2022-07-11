// importing a model to us the property that we have defined into the model 

const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"Profile Section"
    })
}

// controller for the page of sign-up
module.exports.sign_in = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id');

    if(req.isAuthenticated()){
       return res.redirect('/user/profile')
    }
    return res.render('signIn',{
        title:"sign-in"
    })
}

// controller for the page of sign-up
module.exports.sign_up = function(req,res){
     if(req.isAuthenticated()){
        return res.redirect('/user/profile');
     }

    return res.render('signUp',{
        title:"sign-up"
    })
}


// to get the sign-up data 
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        console.log("password doesn't match");
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err) {console.log("error in finding the user in sign-up"); return};
        if(!user){
          User.create(req.body,function(err,user){
            if(err){
                console.log("error while creating an user");
                return;
            }
            return res.redirect('/user/sign-in');
          })
        }
        else{
            console.log('user exists with this email id')
            return res.redirect('back');
        }
    })
}

// to sign-in and create the session 
module.exports.createSession = function(req,res){
  return res.redirect('/');
}

// creating a method for signout
module.exports.distroySession = (req, res) => {
    req.logOut(function(err){
        if(err){
            return err;
        }
        return res.redirect('/');
    });
}