const mongoose = require("mongoose");


// * Customer Model
const RegisterUser = mongoose.model(
  "RegisterUSer",
  new mongoose.Schema({
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
  })
);

module.exports.registerUser = RegisterUser;
