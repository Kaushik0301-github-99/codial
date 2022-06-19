// that will be the entery point for the router 

const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
console.log('this route file has been called')
router.get('/',homeController.home);

module.exports = router;