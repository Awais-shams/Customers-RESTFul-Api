const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// * Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

// * Adding jwt method to schema
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN);
  return token;
};

// * Customer Model
const RegisterUser = mongoose.model("RegisterUSer", userSchema);

module.exports.registerUser = RegisterUser;
