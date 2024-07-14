const express = require("express");
const app = express();
const path = require("path");
const { create } = require("express-handlebars");
const monitorsData = require("./public/data/monitors");
const keyboardsData = require("./public/data/keyboards");
const mouseData = require("./public/data/mouse");
const headphonesData = require("./public/data/headphones");
const allProducts = require("./public/data/allProducts");
require("dotenv").config();
const stripe = require("stripe")(process.env.Token);

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
  console.log(price);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
