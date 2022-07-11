const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');
const passport = require('passport');
router.get('/profile',passport.checkAuthenticate,userController.profile);
router.use('/content',require('./post'));
router.get('/sign-in',userController.sign_in);
router.get('/sign-up',userController.sign_up);


router.post('/create',userController.create);
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/user/sign-in'},),userController.createSession);
router.get('/sign-out',userController.distroySession)
module.exports = router;