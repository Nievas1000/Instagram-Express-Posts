const { insertPost } = require("../model/postModel");

exports.savePost = (req, res) => {
  const image = req.file.filename;
  const idAuthor = req.body.id;

  insertPost(idAuthor, image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Created!");
    }
  });
};
