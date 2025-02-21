const Attempt = require("../models/Attempt");
const User = require("../models/User");
const Quiz = require("../models/Quiz");

exports.saveAttempt = async (req, res) => {
  try {
    const { username, quizId, selectedAnswer } = req.body;

    if (!quizId || !selectedAnswer || !username) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: quizId, selectedAnswer, or username are required",
      });
    }

    // Find or create the user
    let user = await User.findOne({ username });
    if (!user) {
      user = await User.create({ username, attempts: [] });
    }

    const quiz = await Quiz.findOne({ quizId });
    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    // Find the selected option inside the quiz options
    const selectedOption = quiz.options.find(
      (option) => option._id.toString() === selectedAnswer.toString()
    );

    if (!selectedOption) {
      return res.status(400).json({
        success: false,
        message: "Invalid selected answer",
      });
    }

    // Check if the selected answer is correct
    const isCorrect = selectedOption.isCorrect;

    // Calculate score (1 for correct, 0 for incorrect)
    const score = isCorrect ? 1 : 0;

    // Create the attempt with calculated score
    const attempt = await Attempt.create({
      quizId,
      username: user._id,
      selectedAnswer,
      isCorrect,
      score,
      submittedAt: new Date(),
    });

    // Add attempt to the user's `attempts` array
    user.attempts.push(attempt._id);
    await user.save();

    return res.status(201).json({
      success: true,
      data: attempt,
      score,
      message: isCorrect ? "Correct answer!" : "Wrong answer!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save attempt",
      error: error.message,
    });
  }
};


// exports.getAttempts = async (req, res) => {
//   try {
//     const { username, quizId, page = 1, limit = 10 } = req.query;
    
//     // Build query based on filters
//     const query = {};
//     if (username) query.username = username;
//     if (quizId) query.quizId = Number(quizId);

//     // Calculate skip value for pagination
//     const skip = (page - 1) * limit;

//     // Get attempts with pagination
//     const attempts = await Attempt.find(query)
//       .sort({ submittedAt: -1 }) // Sort by newest first
//       .skip(skip)
//       .limit(parseInt(limit))
//       // .populate('quizId');

//     // Get total count for pagination
//     const total = await Attempt.countDocuments(query);

//     res.status(200).json({
//       success: true,
//       data: attempts,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / limit)
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch attempts",
//       error: error.message
//     });
//   }
// };




