import type { RequestHandler } from "express";
import { verifyJWT } from "../util/jwtUtil.js";

const authMiddleware: RequestHandler = async (req, res, next) => {
    try {

        let token: string | undefined;

        // 1. Check cookie token first
        if (req.cookies?.token) {
            console.log("getting :",req.cookies.token);
            
            token = req.cookies.token;
        }

        // 2. If no cookie token, check Authorization header
        else if (req.headers.authorization?.startsWith("Bearer ")) {
            console.log(req.headers.authorization);
            token = req.headers.authorization.split(" ")[1];
        }

        console.log(token);
        
        // 3. No token found
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: Token missing"
            });
        }

        // 4. Verify token
        const decodedToken = await verifyJWT(token);

        if (!decodedToken) {
            return res.status(401).json({
                message: "Unauthorized: Invalid token"
            });
        }

        // 5. Attach user to request
        req.user = decodedToken.user;

        next();

    } catch (error) {
        console.error("Auth Middleware Error:", error);

        return res.status(500).json({
            message: "Auth Middleware Error:"
        });
    }
};

export default authMiddleware;