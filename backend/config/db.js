const mongoose = require("mongoose");

require("dotenv").config();
const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connect;
