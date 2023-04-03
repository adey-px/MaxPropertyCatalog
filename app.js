import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import placeRoute from './routes/placeRoute.js';
import userRoute from './routes/userRoute.js';
import RaiseError from './helpers/RaiseError.js';
/*
 */
// Instance of express app object
const app = express();

// Load environment variables from dotenv
dotenv.config();

// Parse body of any incoming request
app.use(bodyParser.json());

// Middlewares for paths in routes dir
app.use('/places', placeRoute);
app.use('/users', userRoute);

// Middlewares for custom error handler
app.use((req, res, next) => {
	const error = new RaiseError(
		'Oops! Resources not found',
		404
	);
	throw error;
});

app.use((err, req, res, next) => {
	if (res.headerSent) {
		return next(err);
	}
	res.status(err.code || 500);
	res.json({
		message: err.message || 'Internal server error!',
	});
});

// Database config
mongoose
	.connect(
		process.env.MONGO_URL,
		console.log('Database server connected...')
	)
	.then(
		app.listen(
			4000,
			console.log('Development server running...')
		)
	)
	.catch((err) => {
		console.log(err);
	});
