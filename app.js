const express = require("express");
const app = express();
const path = require("path");
const { create } = require("express-handlebars");
const monitorsData = require("./public/data/monitors");
const keyboardsData = require("./public/data/keyboards");
const mouseData = require("./public/data/mouse");
const headphonesData = require("./public/data/headphones");
const allProducts = require("./public/data/allProducts");

const stripe = require("stripe")(
  "sk_test_51NOA4SDltZuFbXatKHv7ROPwdUQ13yVe8fsPhwFwjWsgWU1ElqQMIoLQMrG1tQm3ZDB9306j1BZbltPjKVTsfw7s006eHCJwKs"
);

const hbs = create({
  defaultLayout: "main",
  extname: ".handlebars",
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));

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

app.get("/shop/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = allProducts.items.find((p) => p.id === itemId);
  const itemPrice = item.price;
  console.log(itemPrice);
  if (item) {
    res.render("shop", { item });
    console.log(item.product_name);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/create-checkout-session", async (req, res) => {
  const price = await stripe.prices.create({
    currency: "usd",
    unit_amount: 1000,
    recurring: {
      interval: "month",
    },
    product_data: {
      name: "Gold Plan",
    },
  });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `http://localhost:3000/success.html`,
    cancel_url: `http://localhost:3000/success.html`,
  });

  res.redirect(303, session.url);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
