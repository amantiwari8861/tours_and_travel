import "dotenv/config";

import express, { type Request, type Response } from "express";
import morgan from "morgan";
import connectDB from "./config/mongoose.js";
import userRouter from "./router/user.router.js";
import userDetailsRouter from "./router/userDetails.router.js";
import placeRouter from "./router/place.router.js";
import cors from "./config/cors.config.js";
import authRouter from "./router/auth.router.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const HOSTNAME = process.env.HOSTNAME || "localhost";

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is up and Running!");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user-details", userDetailsRouter);
app.use("/api/v1/place", placeRouter);


app.listen(Number(PORT), HOSTNAME, async () => {
    console.log(`listening on http://${HOSTNAME}:${PORT}`);
    await connectDB()
});



// npm i express morgan jsonwebtoken bcryptjs cookie-parser
// npm i -D dotenv typescript tsx
// npm i -D @types/express @types/morgan @types/node @types/cors @types/jsonwebtoken @types/bcryptjs @types/cookie-parser