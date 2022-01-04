const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  url: String,
  type: String,
  price: {
    type: Number,
    default: 0,
  },
  rating: Number,
  unique_type: String,
  uid: Number,
});
// -------create collection-------//
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
