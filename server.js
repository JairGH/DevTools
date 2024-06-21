const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

function renderWithLayout(res, view, options = {}) {
  res.render(view, (err, html) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.render("layout", {
        title: options.title || "DevTools",
        cssFile: options.cssFile || null,
        body: html,
      });
    }
  });
}

app.get("/", (req, res) => {
  renderWithLayout(res, "index");
});

app.get("/monitors", (req, res) => {
  res.render("monitors");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
