const db = require("../config/db");

exports.insertPost = (id, image, callback) => {
  db.query(
    "INSERT INTO post (id_author, image) VALUES (?,?)",
    [id, image],
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
