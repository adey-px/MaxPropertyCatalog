import * as uuid from "uuid";
import { validationResult } from "express-validator";

import HttpError from "../models/httpError.js";
import addrCoordinate from "../utils/location.js";

//
let DUMMY_PLACES = [
  {
    id: "place1",
    title: "Empire State Building",
    description: "The most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "user1",
  },
];

// Create new place
const createPlace = async (req, res, next) => {
  //
  const errCheck = validationResult(req);
  //
  if (!errCheck.isEmpty()) {
    return next(
      new HttpError("Invalid inputs, please check your data.", 422)
    );
  }
  // expected incoming requests
  const { title, description, address, creator } = req.body;

  // get location from address coordinates
  let coordinates;
  try {
    coordinates = await addrCoordinate(address);
  } catch (error) {
    return next(error);
  }
  // get all incoming requests 
  const newPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  //
  DUMMY_PLACES.push(newPlace); //or .unshift

  res.status(201).json({ place: newPlace });
};

// Read or get place
const placeById = (req, res, next) => {
  //
  const placeId = req.params.pid; // { pid: 'place1' }
  //
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  // if no place
  if (!place) {
    throw new HttpError("No matching place found.", 404);
  }

  res.json({ place });
};

// Read or get places by user
const placesByUser = (req, res, next) => {
  //
  const userId = req.params.uid;
  //
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });
  //
  if (!places || places.length === 0) {
    return next(new HttpError("No matching place found.", 404));
  }

  res.json({ places });
};

// Update or edit place
const updatePlace = (req, res, next) => {
  //
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs, please try again.", 422);
  }
  //
  const { title, description } = req.body;
  const placeId = req.params.pid;
  //
  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  //
  updatedPlace.title = title;
  updatedPlace.description = description;
  //
  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

// Delete place
const deletePlace = (req, res, next) => {
  //
  const placeId = req.params.pid;
  //
  if (!DUMMY_PLACES.find((p) => p.id === placeId)) {
    throw new HttpError("No matching place found.", 404);
  }
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);

  res.status(200).json({ message: "Place has been deleted." });
};

// Exports
const _createPlace = createPlace;
export { _createPlace as createPlace };

const _placeById = placeById;
export { _placeById as placeById };

const _placesByUser = placesByUser;
export { _placesByUser as placesByUser };

const _updatePlace = updatePlace;
export { _updatePlace as updatePlace };

const _deletePlace = deletePlace;
export { _deletePlace as deletePlace };
