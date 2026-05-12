import { Router, type Request, type Response } from "express";
import {
    addUser,
    deleteUser,
    getAllUser,
    updateUser,
    getUserById,
    getUserByEmail
} from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get("/greet", (req: Request, res: Response) => {
    res.send(`hello user!, this is route from user.router`); // 1 line only
});

userRouter.get("/", getAllUser);
userRouter.get("/:userId", getUserById);
userRouter.get("/email/:email", getUserByEmail);
userRouter.post("/", addUser);
userRouter.put("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);


export default userRouter;