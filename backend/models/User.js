const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  attempts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Attempt",
  }],
});

module.exports = mongoose.model("User", userSchema);


