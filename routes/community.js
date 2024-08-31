const express = require("express");
const router = express.Router();
const User = require("../models/user");
const UserPost = require("../models/userPost");
const jwt = require("jsonwebtoken");
const monitorsData = require("../public/data/monitors");

router.get("/community", (req, res) => {
  const { user } = req.session;
  if (!user) {
    return res.render("/community");
  }
  res.render("community", { user });
});

router.get("/community/all", (req, res) => {
  res.render("communityAll", monitorsData);
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

router.post("/community/post", async (req, res) => {
  const { user } = req.session;
  try {
    const findUser = await User.findOne({ email: user.email });

    if (!findUser) {
      return res.status(404).send("User not found");
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

module.exports = router;
