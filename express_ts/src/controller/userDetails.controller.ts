import type { RequestHandler } from "express";
import userDetailsModel from "../model/userDetails.model.js";
import userModel from "../model/user.model.js";

const getDetailsByUserId: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;

        const details = await userDetailsModel.findOne({ userId }).populate("userId");

        if (!details) {
            res.status(404).json({ message: "User details not found" });
            return;
        }

        res.status(200).json({
            message: "User details fetched successfully",
            details
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch user details" });
    }
}

const updateDetailsByUserId: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;
        const detailFields = req.body;

        const updatedDetails = await userDetailsModel.findOneAndUpdate(
            { userId },
            detailFields,
            { new: true, runValidators: true }
        );

        if (!updatedDetails) {
            res.status(404).json({ message: "User details not found" });
            return;
        }

        res.status(200).json({
            message: "User details updated successfully",
            details: updatedDetails
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update user details" });
    }
}

const deleteDetailsByUserId: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedDetails = await userDetailsModel.findOneAndDelete({ userId });

        if (!deletedDetails) {
            res.status(404).json({ message: "User details not found" });
            return;
        }

        // Remove the details reference from the User document
        await userModel.findByIdAndUpdate(userId, { $unset: { details: "" } });

        res.status(200).json({
            message: "User details deleted successfully",
            details: deletedDetails
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete user details" });
    }
}

export { getDetailsByUserId, updateDetailsByUserId, deleteDetailsByUserId };