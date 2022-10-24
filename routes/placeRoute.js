import { Router } from "express";
import { check } from "express-validator";

import {
  createPlace,
  placeById,
  placesByUser,
  updatePlace,
  deletePlace,
} from "../controllers/placeContr.js";

//
const router = Router();

// Create new place
router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);

// Read or get place
router.get("/place/:pid", placeById);

// Read or get places by user
router.get("/user-places/:uid", placesByUser);

// Update or edit place
router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlace
);

// Delete place
router.delete("/del-place/:pid", deletePlace);

export default router;
