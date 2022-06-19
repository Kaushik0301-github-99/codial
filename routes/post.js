const express = require('express');
const router = express.Router();
const post_controller = require('../controller/post_controller');

router.get('/post',post_controller.post);

module.exports = router;