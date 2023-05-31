const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const multer = require("multer");
const path = require("path");

app.use("/posts", express.static("posts"));

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, "../posts"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const fileUpload = multer({
  storage: diskStorage,
}).single("image");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

const userRouter = require("./route.js");
app.use("/", fileUpload, userRouter);

app.listen(3002, () => {
  console.log("Server run on port " + 3002);
});
