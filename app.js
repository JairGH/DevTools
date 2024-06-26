const express = require("express");
const app = express();
const path = require("path");
const { create } = require("express-handlebars");
const monitorsData = require("./public/data/monitors");


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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});