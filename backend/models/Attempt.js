const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  quizId: {
    type: Number,
    ref: "Quiz",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  selectedAnswer: {
    type: String,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Attempt", attemptSchema);
