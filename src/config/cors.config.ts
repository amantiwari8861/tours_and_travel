import cors, { type CorsOptions } from "cors";

const corsOptions: CorsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://iamandroid.in",
        "https://www.iamandroid.in"
    ],

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

    credentials: true,

    allowedHeaders: [
        "Content-Type",
        "Authorization"
    ]
};

export default cors(corsOptions);