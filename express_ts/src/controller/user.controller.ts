import type { RequestHandler } from "express";
import UserModal from "../model/user.model.js";
import userModel from "../model/user.model.js";
import userDetailsModel from "../model/userDetails.model.js";
import bcrypt from "bcryptjs";

const addUser: RequestHandler = async (req, res) => {

    try {

        const userObj = req.body;
        const hash = bcrypt.hashSync(userObj.password, 10);
        userObj.password = hash;
        
        const userModel = new UserModal(userObj);

        const savedUser = await userModel.save();
        const { phone, age, address, profileImage, gender, destinationTravelled, healthIssues, document } = userObj;
        const savedUserDetails = await new userDetailsModel({
            userId: savedUser._id,
            phone, age, address, profileImage, gender, destinationTravelled, healthIssues, document,
        }).save();

        savedUser.details = savedUserDetails._id;

        await savedUser.save();

        return res.status(201).json({
            message: "User added successfully",
            user: savedUser,
            userDetails: savedUserDetails
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to add user"
        });
    }
};

const getAllUser: RequestHandler = async (req, res) => {
    try {
        const users = await userModel
            .find()
            .populate("details");

        console.log(users);

        res.status(200).json({
            message: "Users fetched successfully!",
            users
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Unable to fetch users"
        });
    }
};

const updateUser: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, email, password, role, isActive, ...detailFields } = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { name, email, password, role, isActive },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        if (Object.keys(detailFields).length > 0) {
            await userDetailsModel.findOneAndUpdate(
                { userId },
                detailFields,
                { new: true, runValidators: true }
            );
        }

        const user = await userModel.findById(userId).populate("details");

        res.status(200).json({
            message: "User updated successfully",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update user" });
    }
}

const deleteUser: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        await userDetailsModel.findOneAndDelete({ userId });

        res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete user" });
    }
}

const getUserById: RequestHandler<{ userId: string }> = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await userModel.findById(userId).populate("details");

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json({
            message: "User fetched successfully",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch user" });
    }
}

const getUserByEmail: RequestHandler<{ email: string }> = async (req, res) => {
    try {
        const email = req.params.email;

        const user = await userModel.findOne({ email }).populate("details");

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json({
            message: "User fetched successfully",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch user" });
    }
}

export { addUser, getAllUser, updateUser, deleteUser, getUserById, getUserByEmail };


