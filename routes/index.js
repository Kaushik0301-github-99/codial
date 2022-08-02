// that will be the entery point for the router 

const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const { route } = require('./post');
console.log('this route file has been called')
router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/posts',require('./post'));
router.use('/comments',require('./comments'));

module.exports = router;


