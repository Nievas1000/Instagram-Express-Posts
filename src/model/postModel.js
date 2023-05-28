const db = require("../config/db");

exports.insertPost = (date, description, id, image, callback) => {
  db.query(
    "INSERT INTO post (date, description,id_author, image) VALUES (?,?,?,?)",
    [date, description, id, image],
    (err, result) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.getPostById = (id, callback) => {
  db.query("SELECT * FROM post WHERE id_author = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
