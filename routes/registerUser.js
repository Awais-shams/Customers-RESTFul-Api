const express = require("express");
const router = express.Router();
const { registerUser } = require("../models/registerUser");

router.post("/", async (req, res) => {
  const result = await new registerUser({
    name: req.body.name,
    email: req.body.name,
    password: req.body.name,
  });

  await result.save();
  res.send(result);
});

module.exports = router;
