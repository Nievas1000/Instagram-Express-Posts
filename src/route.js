const express = require("express");
const router = express.Router();
const postController = require("./controller/postController");

router.route("/post").post(postController.savePost);
router.route("/post/:id").get(postController.getPostById);
router.route("/profileImage").put(postController.updateProfileImage);
router.route("/deleteProfileImage/:id").put(postController.deleteProfileImage);

module.exports = router;
