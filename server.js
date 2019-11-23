require('dotenv').config();
const dbConn = require('./db');
const express = require('express');
const app = express();
const morgan = require('morgan');
const routeConfig = require('./routes');
const PORT = process.env.PORT || 6969;


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routeConfig(app);

dbConn()
	.then(() => {
		console.log("Connected to DB.");
		app.listen(PORT, () =>
			console.log(`APP LISTENING FOR CONNECTIONS ON PORT: ${PORT}`)
		);
	})
	.catch(error => {
		console.log("Could not start APP error:", error);
	});
