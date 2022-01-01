const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});
//----pre saving method------//
userSchema.pre("save", async function (next) {
  this.pass = await bcrypt.hash(this.pass, 10);
  next();
});
// -------create collection-------//
const Register = new mongoose.model("Register", userSchema);
module.exports = Register;
