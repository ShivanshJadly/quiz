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
  options: [{
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      auto: true
    },
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
      default: false,
    },
  }]
});


module.exports = mongoose.model("Quiz", quizSchema);;
