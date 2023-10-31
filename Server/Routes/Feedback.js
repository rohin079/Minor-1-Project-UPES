const express = require("express");
const router = express.Router();
const Feedback_schema = require("../models/feedback_schema");

router.post("/", async (req, res) => {
  try {
    let feed = await Feedback_schema.create({
      email: req.body.email,
      feedback: req.body.feedback,
    });
    res.json({ feed });
  } catch (error) {
    console.log("error", error.message);
  }
});

module.exports = router;
