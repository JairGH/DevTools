const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.Token);
const allProducts = require("../public/data/allProducts");

router.get("/create-checkout-session", (req, res) => {
  res.render("checkout");
});

router.post("/create-checkout-session/:id", async (req, res) => {
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
    success_url: `http://localhost:8080/success`,
    cancel_url: `http://localhost:8080/cancel`,
  });

  res.redirect(303, session.url);
});

router.get("/success", (req, res) => {
  res.render("success");
});

router.get("/cancel", (req, res) => {
  res.render("cancel");
});

module.exports = router;
