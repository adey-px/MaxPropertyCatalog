import express from "express";
import bodyParser from "body-parser";

import placeRoute from "./routes/placeRoute.js";
import userRoute from "./routes/userRoute.js";
import HttpError from "./models/httpError.js";

// Instance of express app object
const app = express();

// Parse body of any incoming request
app.use(bodyParser.json());

// Middlewares for paths in routes dir
app.use("/places", placeRoute);
app.use("/users", userRoute);

// Middlewares for custom error handler
app.use((req, res, next) => {
  const error = new HttpError("Resources cannot be found!", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Internal server error!" });
});

// Node server config setting
app.listen(4000, () => {
  console.log("Development server is running...");
});
