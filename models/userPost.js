const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPostSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const UserPost = mongoose.model("UserPost", userPostSchema);
module.exports = UserPost;
