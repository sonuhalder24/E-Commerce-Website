const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");

app.use(express.static(path.join(__dirname, "../static")));
app.use(express.urlencoded({ extended: false }));

// -------------------get requests-------------
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "index.html"));
});
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "products.html"));
});
app.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "account.html"));
});
app.get("/product-details", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "product-details.html"));
});
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "cart.html"));
});
app.get("/smartBand", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/pages", "smart_band_buy.html"));
});
// ----------------listen port---------------
app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});
