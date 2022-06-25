const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

router.get('/profile',userController.profile);
router.use('/content',require('./post'));
router.get('/sign-in',userController.sign_in);
router.get('/sign-up',userController.sign_up);

router.post('/create',userController.create);

module.exports = router;