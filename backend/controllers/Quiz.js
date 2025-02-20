const Quiz = require("../models/Quiz");

exports.getQuiz = async (req, res) => {
  const quiz = await Quiz.find();
  res.status(200).json(quiz);
};



