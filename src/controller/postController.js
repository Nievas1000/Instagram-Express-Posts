const {
  insertPost,
  getPostById,
  updateProfileImage,
  deleteProfileImage,
  updateInfoProfile,
} = require("../model/postModel");

exports.savePost = (req, res) => {
  const image = req.file.filename;
  const idAuthor = req.body.id;
  const description = req.body.description;
  const date = req.body.date;

  insertPost(date, description, idAuthor, image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Created!");
    }
  });
};

exports.getPostById = (req, res) => {
  const id = req.params.id;
  getPostById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.updateProfileImage = (req, res) => {
  const id = req.body.id;
  const image = req.file.filename;
  updateProfileImage(id, image, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.deleteProfileImage = (req, res) => {
  const id = req.params.id;
  deleteProfileImage(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
