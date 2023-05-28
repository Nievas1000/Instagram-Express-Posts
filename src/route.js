const express = require("express");
const router = express.Router();
const postController = require("./controller/postController");

router.route("/post").post(postController.savePost);
router.route("/post/:id").get(postController.getPostById);

module.exports = router;
