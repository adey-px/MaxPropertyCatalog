import express from 'express';
import bodyParser from 'body-parser';

import placeRoute from './routes/placeRoute.js';
import userRoute from './routes/userRoute.js';
const HttpError = require('./models/httpError');


const app = express();

app.use(bodyParser.json());

// Routing middlewares
app.use('/places', placeRoute)
app.use('/users', userRoute)

// Error handler
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

// Error handler
app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
});
  


// Node server config
app.listen(5000,
    console.log('App connected to server...')
)