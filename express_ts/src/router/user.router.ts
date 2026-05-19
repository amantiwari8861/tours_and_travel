import { Router, type Request, type Response } from "express";
import {
    addUser,
    deleteUser,
    getAllUser,
    updateUser,
    getUserById,
    getUserByEmail
} from "../controller/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/greet", (req: Request, res: Response) => {
    res.send(`hello user!, this is route from user.router`); // 1 line only
});

userRouter.post("/", addUser);// http://localhost:5000/api/v1/user
userRouter.use(authMiddleware); // place matters a lot, if placed below then middleware will not be applied to the above routes
userRouter.get("/", getAllUser);
userRouter.get("/:userId", getUserById);
userRouter.get("/email/:email", getUserByEmail);
userRouter.put("/:userId", updateUser);
userRouter.delete("/:userId", deleteUser);


export default userRouter;