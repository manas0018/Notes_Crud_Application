const express = require('express');
const multer = require('multer');
const uploadImage = require('./services/storage.service');
const app = express();
const postModel = require('./models/note.model');

const upload=multer({storage:multer.memoryStorage()});
app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file); 
  const result = await uploadImage(req.file.buffer); 
  const post = await postModel.create({
    image: result.url, 
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
  
  
});
app.get("/posts", async (req, res) => {
  const posts=await postModel.find();
  return res.status(200).json({
    message:"Posts fetched successfully",
    posts,
  })


})
module.exports = app;