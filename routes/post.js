const express = require('express');
const router = express.Router();
const post_controller = require('../controller/post_controller');
const passport = require('passport');

router.post('/create',passport.checkAuthenticate,post_controller.create);
router.get("/destroy/:id",passport.checkAuthenticate,post_controller.destroy)

module.exports = router;