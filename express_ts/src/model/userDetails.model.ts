import mongoose from "mongoose";
const { Schema } = mongoose;

const userDetailsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    phone: Number,
    age: Number,
    isProfileComplete: {
        type: Boolean,
        default: false,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number,
        country: String,
    },
    profileImage: String,
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"],
    },
    destinationTravelled: [String],
    healthIssues: [String],
    document: {
        type: Map,
        of: Schema.Types.Mixed,
    }
}, { timestamps: true });

export default mongoose.model("UserDetails", userDetailsSchema);
