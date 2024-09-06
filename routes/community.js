const express = require("express");
const router = express.Router();

const User = require("../models/user");
const UserPost = require("../models/userPost");
const jwt = require("jsonwebtoken");
const monitorsData = require("../public/data/monitors");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/community", authMiddleware, async (req, res) => {
  const { user } = req;

  if (user) {
    try {
      const posts = await UserPost.find();
      return res.render("communityAll", { posts });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  }

  res.render("community", { user: null });
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await new User({ username, email, password }).save();
    const token = jwt.sign(
      { username: user.username, email: email },
      process.env.SECRET_JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
      })
      .redirect("/community");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/community/login", async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.send("Invalid email or password");
    } else {
      const token = jwt.sign(
        { username: user.username, email: email },
        process.env.SECRET_JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
      });
    }
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        console.log(err);
        return res.status(500).send("Server error");
      }
      if (isMatch) {
        res.redirect("/community");
      } else {
        res.send("Invalid email or password");
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.post("/community/post", authMiddleware, async (req, res) => {
  const { user } = req;
  try {
    const findUser = await User.findOne({ email: user.email });

    if (!findUser) {
      return res.status(404).send("User not found.");
    }
    const newPost = new UserPost(req.body);
    await newPost.save();

    findUser.posts.push(newPost._id);
    await findUser.save();

    console.log("Post created and associated with user successfully.");

    res.redirect("/community/all");
  } catch (error) {
    console.error("Error creating post for user:", error);
    res.status(500).send("Server error");
  }
});

router.delete("/community/all/:id", authMiddleware, async (req, res) => {
  const { user } = req;
  const postId = req.params.id;

  try {
    const findUser = await User.findOne({ email: user.email });

    if (!findUser) {
      return res.status(404).send("User not found.");
    }

    const postExists = findUser.posts.some(
      (post) => post._id.toString() === postId
    );
    if (!postExists) {
      return res
        .status(403)
        .send("Post does not belong to the user or does not exist.");
    }

    const findPost = await UserPost.findById(postId);
    if (!findPost) {
      return res.status(404).send("Post not found.");
    }

    await UserPost.findByIdAndDelete(postId);

    res.status(200).send("Post deleted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
