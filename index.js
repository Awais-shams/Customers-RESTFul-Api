// * Modules/Packages
require("dotenv").config;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const customers = require("./routes/customers");
const registerUser = require("./routes/registerUser");

// *Custom Middlewares
app.use(express.json());

// * Env Config
const port = process.env.PORT || 3000;

// * Creating a server
app.listen(port, () => console.log(`Listening on port ${port}...`));

// * Database Integration
mongoose
  .connect("mongodb://localhost/customers")
  .then(() => console.log("Mongodb Connection Successful"));

// * Testing
app.use("/api/customers", customers);

// * User Registration
app.use("/api/register", registerUser);
