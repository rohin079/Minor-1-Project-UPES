const mongoose = require("mongoose");

const Feedbackschema = mongoose.Schema({
  email: {
    type: String,
    requires: true,
  },

  feedback: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Feedback_schema = mongoose.model("feedback", Feedbackschema);
module.exports = Feedback_schema;
