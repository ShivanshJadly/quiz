const express = require("express");
const router = express.Router();

const { 
  getQuiz, 
  getQuizById, 
} = require("../controllers/Quiz");
const { saveAttempt, getAttempts } = require("../controllers/Attempt");

// Quiz routes
router.get("/quiz", getQuiz);
router.get("/quiz/:id", getQuizById);

router.post("/attempt", saveAttempt);
router.get("/attemptHistory", getAttempts);

module.exports = router;