const Attempt = require("../models/Attempt");
const Quiz = require("../models/Quiz");

exports.saveAttempt = async (req, res) => {
  try {
    const { username, quizId, selectedAnswer } = req.body;
    
    if (!username || !quizId || !selectedAnswer) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: username, quizId, and selectedAnswer are required"
      });
    }

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found"
      });
    }

    // Calculate score based on correct selectedAnswer
    let calculatedScore = 0;
    selectedAnswer.forEach((answer, index) => {
      if (quiz.question[index] && answer === quiz.question[index].correctAnswer) {
        calculatedScore += 1;
      }
    });

    // Create the attempt with calculated score
    const attempt = await Attempt.create({
      username,
      quizId,
      selectedAnswer,
      score: calculatedScore,
      submittedAt: new Date()
    });

    res.status(201).json({
      success: true,
      data: attempt,
      score: calculatedScore
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save attempt",
      error: error.message
    });
  }
};

exports.getAttempts = async (req, res) => {
  try {
    const { username, quizId, page = 1, limit = 10 } = req.query;
    
    // Build query based on filters
    const query = {};
    if (username) query.username = username;
    if (quizId) query.quizId = quizId;

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Get attempts with pagination
    const attempts = await Attempt.find(query)
      .sort({ submittedAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(parseInt(limit))
      .populate('quizId');

    // Get total count for pagination
    const total = await Attempt.countDocuments(query);

    res.status(200).json({
      success: true,
      data: attempts,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch attempts",
      error: error.message
    });
  }
};




