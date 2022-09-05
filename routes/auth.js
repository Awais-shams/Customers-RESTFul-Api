const express = require("express");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const router = express.Router();
const { registerUser } = require("../models/registerUser");
require("dotenv").config;

router.post("/", async (req, res) => {
  const result = await new registerUser(
    _.pick(req.body, ["name", "email", "password"])
  );

  const hashed = await registerUser
    .find({ email: "awais.2120@gmail.com" })
    .select("password");
  console.log(hashed[0].password);
  const valid = await bcrypt.compare(req.body.password, hashed[0].password);
  if (!valid) {
    res.status(404).send("Invalid email or Password");
  } else {
    const token = result.generateAuthToken();
    res.send(token);
  }
});

module.exports = router;
