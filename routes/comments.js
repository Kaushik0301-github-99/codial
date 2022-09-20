const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentController = require('../controller/comments_Controller');

router.post('/create',passport.checkAuthenticate,commentController.create);
router.get('/destroy/:id',passport.checkAuthenticate,commentController.distroyComment)

module.exports = router;