const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { create } = require("express-handlebars");
const monitorsData = require("./public/data/monitors");
const keyboardsData = require("./public/data/keyboards");
const mouseData = require("./public/data/mouse");
const headphonesData = require("./public/data/headphones");
const allProducts = require("./public/data/allProducts");
const User = require("./models/user");
const UserPost = require("./models/userPost");
const stripe = require("stripe")(process.env.Token);

const PORT = process.env.PORT || 3000;

const hbs = create({
  defaultLayout: "main",
  extname: ".handlebars",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  const token = req.cookies.access_token;
  req.session = { user: null };

  try {
    const data = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.session.user = data;
  } catch {}

  next();
});

const dbUri =
  "mongodb+srv://dbAdmin:dbAdmin123@cluster0.kmvoyb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbUri)
  .then((results) =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));

var user = false;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/monitors", (req, res) => {
  res.render("monitors", monitorsData);
});

app.get("/keyboards", (req, res) => {
  res.render("keyboards", keyboardsData);
});

app.get("/mouse", (req, res) => {
  res.render("mouse", mouseData);
});

app.get("/headphones", (req, res) => {
  res.render("headphones", headphonesData);
});

app.get("/community", (req, res) => {
  const { user } = req.session;
  console.log(user);
  if (!user) {
    return res.render("community");
  }
  res.render("community", { user });
});

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password }).save();
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
  }
});

app.get("/create-checkout-session", (req, res) => {
  res.render("checkout");
});

app.get("/success", (req, res) => {
  res.render("success");
});
app.get("/cancel", (req, res) => {
  res.render("cancel");
});

app.post("/create-checkout-session/:id", async (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const product = allProducts.items.find((p) => p.id === itemId);
  const price = await stripe.prices.create({
    currency: "usd",
    unit_amount: product.price,
    product_data: {
      name: product.product_name,
    },
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cancel`,
  });

  res.redirect(303, session.url);
});

app.get("/community/login", async (req, res) => {
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

app.post("/community/post", async (req, res) => {
  const { user } = req.session;
  console.log(user.email);
  try {
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      return res.status(404).send("User not found");
    }

    const newPost = new UserPost(req.body);
    await newPost.save();

    findUser.posts.push(newPost._id);
    await findUser.save();

    console.log("Post created and associated with user successfully.");

    res.redirect("/monitors");
  } catch (error) {
    console.error("Error creating post for user:", error);
    res.status(500).send("Server error");
  }

  console.log(req.body);
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
