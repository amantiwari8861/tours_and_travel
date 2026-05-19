import { Router } from "express";
import {
    addPlace,
    getAllPlaces,
    getPlaceById,
    updatePlace,
    deletePlace,
    addReview,
    deleteReview,
    addMultiplePlaces
} from "../controller/place.controller.js";

const placeRouter = Router();

placeRouter.get("/", getAllPlaces);
placeRouter.get("/:placeId", getPlaceById);
placeRouter.post("/", addPlace);
placeRouter.post("/add-multiple", addMultiplePlaces);
placeRouter.put("/:placeId", updatePlace);
placeRouter.delete("/:placeId", deletePlace);

// Review routes
placeRouter.post("/:placeId/review", addReview);
placeRouter.delete("/:placeId/review/:reviewId", deleteReview);

export default placeRouter;
