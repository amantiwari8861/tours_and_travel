import { Router, type Request, type Response } from "express";
import UserModal from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { createJWT } from "../util/jwtUtil.js";

const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const userInDb = await UserModal.findOne({ email });
        if (!userInDb) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const validPassword = await bcrypt.compare(password, userInDb.password);// 1234 vs $2b$10$k.m8LgY1Z5V6J7L8K9D09u6t68vC0hV8W9Y9F1K0M1L0S0B0R0O0N0M0L0K0J0I0H0G0F0E0D0C0B0A0@
        if (!validPassword) {
            res.status(401).json({ message: "Invalid password" });
            return;
        }
        const token = await createJWT(userInDb);
        res.status(200).json({ message: "User logged in successfully", token, user: userInDb });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to log in user" });
    }
});
// authRouter.post("/register", );

export default authRouter;