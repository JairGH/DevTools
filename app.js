const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { create } = require("express-handlebars");
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");
const communityRoutes = require("./routes/community");
const checkoutRoutes = require("./routes/checkout");

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

app.use(homeRoutes);
app.use(productRoutes);
app.use(communityRoutes);
app.use(checkoutRoutes);

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

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
