const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connect = require("./config/db");
const cors = require("cors");
require("dotenv").config();
connect();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use("/api", routes);


app.listen(PORT,'0.0.0.0', () => {
	console.log(`App is listening at ${PORT}`);
});
