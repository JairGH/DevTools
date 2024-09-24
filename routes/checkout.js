const express = require("express");
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);
const allProducts = require("../public/data/allProducts");
const PORT = process.env.PORT || 8080;

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
    success_url: `https://devtools-production.up.railway.app/success`,
    cancel_url: `https://devtools-production.up.railway.app/cancel`,
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
