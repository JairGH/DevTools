const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const { create } = require("express-handlebars");
const monitorsData = require("./public/data/monitors");
const keyboardsData = require("./public/data/keyboards");
const mouseData = require("./public/data/mouse");
const headphonesData = require("./public/data/headphones");
const allProducts = require("./public/data/allProducts");
const User = require("./models/user");
const stripe = require("stripe")(process.env.Token);
const PORT = process.env.PORT || 3000;
// db
// const dbUri =
//   "mongodb+srv://dbAdmin:dbAdmin123@cluster0.kmvoyb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(dbUri)
//   .then((results) =>
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     })
//   )
//   .catch((err) => console.log(err));

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
  res.render("community");
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

app.post("/community", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((results) => {
      res.redirect("/monitors");
    })
    .catch((err) => {
      console.log(err, "oh no!");
    });
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
