const express = require("express");
const router = express.Router();

const { getQuiz } = require("../controllers/Quiz");
const { saveAttempt, getAttempts } = require("../controllers/Attempt");

router.get("/quiz", getQuiz);
router.post("/attempt", saveAttempt);
router.get("/attemptHistory", getAttempts);

module.exports = router;

