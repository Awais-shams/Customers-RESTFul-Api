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
  const salt = await bcrypt.genSalt(10);
  result.password = await bcrypt.hash(result.password, salt);
  await result.save();
  const token = result.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(result, ["_id", "name", "password"]));
});

module.exports = router;
