const express = require("express");
const env = require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const Register = require("./models/register");
const bcrypt = require("bcryptjs");

app.use(express.static(path.join(__dirname, "../static")));
app.use(express.urlencoded({ extended: false }));

// -------------------get requests--------------------//
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

// -------------------post requests---------------------//

// login
app.post("/login", async (req, res) => {
  try {
    const emailUserEntered = req.body.email;
    const password = req.body.password;

    const userEmail = await Register.findOne({ email: emailUserEntered });
    const isMatch = await bcrypt.compare(password, userEmail.pass);

    if (isMatch) {
      res.status(201).redirect("/home");
    } else {
      console.log("Something wrong");
    }
  } catch (e) {
    console.log("Email not registered");
  }
});
// register
app.post("/register", async (req, res) => {
  try {
    const userSchema = new Register({
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
    });
    const registered = await userSchema.save();
    res.status(201).redirect("/home");
  } catch (e) {
    res.status(400).send(e);
  }
});
// ----------------listen port---------------//
app.listen(port, () => {
  console.log(`server is running at port no. ${port}`);
});
