const express = require("express");
const router = express.Router();
const monitorsData = require("../public/data/monitors");
const keyboardsData = require("../public/data/keyboards");
const mouseData = require("../public/data/mouse");
const headphonesData = require("../public/data/headphones");

router.get("/monitors", (req, res) => {
  res.render("monitors", monitorsData);
});

router.get("/keyboards", (req, res) => {
  res.render("keyboards", keyboardsData);
});

router.get("/mouse", (req, res) => {
  res.render("mouse", mouseData);
});

router.get("/headphones", (req, res) => {
  res.render("headphones", headphonesData);
});

module.exports = router;
