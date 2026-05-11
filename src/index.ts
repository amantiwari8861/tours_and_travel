import "dotenv/config";

import express, { type Request, type Response } from "express";
import morgan from "morgan";

import userRouter from "./router/user.router.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const HOSTNAME = process.env.HOSTNAME || "localhost";

app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is up and Running!");
});

app.use("/api/v1/user", userRouter);


app.listen(Number(PORT), HOSTNAME, () => {
    console.log(`listening on http://${HOSTNAME}:${PORT}`);
});

// npm i express morgan
// npm i -D dotenv typescript ts-node nodemon
// npm i -D @types/express @types/morgan @types/node
