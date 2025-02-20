const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizId: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("Quiz", quizSchema);;
