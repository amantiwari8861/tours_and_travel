import { Router } from "express";
import {
    getDetailsByUserId,
    updateDetailsByUserId,
    deleteDetailsByUserId
} from "../controller/userDetails.controller.js";

const userDetailsRouter = Router();

userDetailsRouter.get("/:userId", getDetailsByUserId);
userDetailsRouter.put("/:userId", updateDetailsByUserId);
userDetailsRouter.delete("/:userId", deleteDetailsByUserId);

export default userDetailsRouter;
