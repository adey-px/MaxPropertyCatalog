import express from 'express';
import bodyParser from 'body-parser';
import placeRoute from './routes/placeRoute.js';
import userRoute from './routes/userRoute.js';
import raiseError from './helpers/raiseError.js';
/*
 */
// Instance of express app object
const app = express();

// Parse body of any incoming request
app.use(bodyParser.json());

// Middlewares for paths in routes dir
app.use('/places', placeRoute);
app.use('/users', userRoute);

// Middlewares for custom error handler
app.use((req, res, next) => {
	const error = new raiseError(
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

// Configure server
app.listen(4000, () => {
	console.log('Development server is running');
});
