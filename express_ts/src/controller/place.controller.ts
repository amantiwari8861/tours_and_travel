import type { RequestHandler } from "express";
import placeModel from "../model/places.model.js";

const addPlaceUtil=async (placeObj:any)=>{
    try {
        const savedPlace = await new placeModel(placeObj).save();
        return savedPlace;
    } 
    catch (error) {
        console.error("Error in addPlaceUtil:", error);
        throw error;
    }
}


const addPlace: RequestHandler = async (req, res) => {
    try {
        const placeObj = req.body;

        const savedPlace = await addPlaceUtil(placeObj);

        res.status(201).json({
            message: "Place added successfully",
            place: savedPlace
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add place" });
    }
}

const addMultiplePlaces:RequestHandler = async (req, res) => {
    try {
        const places = req.body;

        const savedPlaces = await placeModel.insertMany(places);

        res.status(201).json({
            message: "Places added successfully",
            places: savedPlaces
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add places" });
    }
}

const getAllPlaces: RequestHandler = async (req, res) => {
    try {
        const places = await placeModel.find()
            .populate("reviews.userId", "name email");

        res.status(200).json({
            message: "Places fetched successfully",
            places
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch places" });
    }
}

const getPlaceById: RequestHandler<{ placeId: string }> = async (req, res) => {
    try {
        const placeId = req.params.placeId;

        const place = await placeModel.findById(placeId)
            .populate("reviews.userId", "name email");

        if (!place) {
            res.status(404).json({ message: "Place not found" });
            return;
        }

        res.status(200).json({
            message: "Place fetched successfully",
            place
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch place" });
    }
}

const updatePlace: RequestHandler<{ placeId: string }> = async (req, res) => {
    try {
        const placeId = req.params.placeId;
        const placeObj = req.body;

        const updatedPlace = await placeModel.findByIdAndUpdate(
            placeId,
            placeObj,
            { new: true, runValidators: true }
        );

        if (!updatedPlace) {
            res.status(404).json({ message: "Place not found" });
            return;
        }

        res.status(200).json({
            message: "Place updated successfully",
            place: updatedPlace
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update place" });
    }
}

const deletePlace: RequestHandler<{ placeId: string }> = async (req, res) => {
    try {
        const placeId = req.params.placeId;

        const deletedPlace = await placeModel.findByIdAndDelete(placeId);

        if (!deletedPlace) {
            res.status(404).json({ message: "Place not found" });
            return;
        }

        res.status(200).json({
            message: "Place deleted successfully",
            place: deletedPlace
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete place" });
    }
}

const addReview: RequestHandler<{ placeId: string }> = async (req, res) => {
    try {
        const placeId = req.params.placeId;
        const { userId, rating, comment } = req.body;

        const place = await placeModel.findById(placeId);

        if (!place) {
            res.status(404).json({ message: "Place not found" });
            return;
        }

        // Check if the user has already reviewed this place
        const existingReview = place.reviews.find(
            (r) => r.userId?.toString() === userId
        );

        if (existingReview) {
            res.status(400).json({ message: "User has already reviewed this place" });
            return;
        }

        place.reviews.push({ userId, rating, comment });

        // Recalculate average rating
        const totalRating = place.reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0);
        place.averageRating = totalRating / place.reviews.length;

        await place.save();

        res.status(201).json({
            message: "Review added successfully",
            place
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add review" });
    }
}

const deleteReview: RequestHandler<{ placeId: string; reviewId: string }> = async (req, res) => {
    try {
        const { placeId, reviewId } = req.params;

        const place = await placeModel.findById(placeId);

        if (!place) {
            res.status(404).json({ message: "Place not found" });
            return;
        }

        const reviewIndex = place.reviews.findIndex(
            (r) => r._id?.toString() === reviewId
        );

        if (reviewIndex === -1) {
            res.status(404).json({ message: "Review not found" });
            return;
        }

        place.reviews.splice(reviewIndex, 1);

        // Recalculate average rating
        if (place.reviews.length > 0) {
            const totalRating = place.reviews.reduce((sum, r) => sum + (r.rating ?? 0), 0);
            place.averageRating = totalRating / place.reviews.length;
        } else {
            place.averageRating = 0;
        }

        await place.save();

        res.status(200).json({
            message: "Review deleted successfully",
            place
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete review" });
    }
}

export { addPlace,addMultiplePlaces, getAllPlaces, getPlaceById, updatePlace, deletePlace, addReview, deleteReview };