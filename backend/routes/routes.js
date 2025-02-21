const express = require("express");
const router = express.Router();

const { 
  getQuiz, 
  getQuizById, 
} = require("../controllers/Quiz");
const { saveAttempt } = require("../controllers/Attempt");
const { createUser, getUser } = require("../controllers/User");

// User routes
router.post("/user", createUser);
router.get("/userAttempt", getUser);

// Quiz routes
router.get("/quiz", getQuiz);
router.get("/quiz/:id", getQuizById);

router.post("/attempt", saveAttempt);
// router.get("/attemptHistory", getAttempts);

module.exports = router;