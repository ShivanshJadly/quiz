const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connect = require("./config/db");
require("dotenv").config();
connect();

app.use(express.json());

app.use("/api", routes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
