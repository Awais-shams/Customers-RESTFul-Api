const mongoose = require("mongoose");

// * Customer Model
const Customers = mongoose.model(
  "customers",
  new mongoose.Schema({
    name: String,
    phone: Number,
    isGold: Boolean,
  })
);

module.exports.customers = Customers;
