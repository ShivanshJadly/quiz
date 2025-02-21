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
  score: {
    type: Number,
    default: 0,
  },
  submittedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Attempt", attemptSchema);
