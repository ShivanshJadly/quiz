const Attempt = require("../models/Attempt");

exports.saveAttempt = async (req, res) => {
  const attempt = await Attempt.create(req.body);
  res.status(201).json(attempt);
};

exports.getAttempts = async (req, res) => {
  const attempts = await Attempt.find();
  res.status(200).json(attempts);
};






