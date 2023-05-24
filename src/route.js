const express = require("express");
const router = express.Router();
const postController = require("./controller/postController");

router.route("/savePost").post(postController.savePost);

module.exports = router;
