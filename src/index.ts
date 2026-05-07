import express, { type Request, type Response } from "express";

const app = express();

const PORT = process.env.PORT || 8080;

const HOSTNAME = process.env.HOSTNAME || "localhost";

app.get("/", (req: Request, res: Response) => {
    res.send("Server is up and Running!");
});

app.listen(Number(PORT), HOSTNAME, () => {
    console.log(`listening on http://${HOSTNAME}:${PORT}`);
});

// npm i express morgan
// npm i -D dotenv typescript ts-node nodemon
// npm i -D @types/express @types/morgan @types/node