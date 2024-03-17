const router = require("express").Router();
const PostController = require('../controller/post.controller')

router.post('/savePost', PostController.savePost);

module.exports = router;
