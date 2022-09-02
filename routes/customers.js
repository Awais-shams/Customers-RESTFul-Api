const express = require("express");
const router = express.Router();
const bodyValidationMiddleware = require("../middlewares/joi-validator/Validation");
const { customers } = require("../models/customers");

// * Get Request
router.get("/", async (req, res) => {
  const result = await customers.find();
  res.send(result);
});

// * Post Request
router.post("/", bodyValidationMiddleware, async (req, res) => {
  const result = await new customers({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });

  await result.save();
  res.send(result);
});

// * Put/Update Request
router.put("/:id", async (req, res) => {
  const result = await customers.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  res.send(result);
});

// * Delete Request
router.delete("/:id", async (req, res) => {
  const result = await customers.findByIdAndRemove(req.params.id);
  res.send(result);
});

module.exports = router;
