const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentController = require('../controller/comments_Controller');

router.post('/create',passport.checkAuthenticate,commentController.create);

module.exports = router;