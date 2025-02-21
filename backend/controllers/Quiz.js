const Quiz = require("../models/Quiz");

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.find()
      .sort({ quizId: 1 })

    if (!quiz || quiz.length === 0) {
      return res.status(404).json({ message: "No quizzes found" });
    }

    res.status(200).json({
      success: true,
      data: quiz,
      count: quiz.length
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error fetching quizzes", 
      error: error.message 
    });
  }
};
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ quizId: req.params.id });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz", error: error.message });
  }
};