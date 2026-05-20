import { type RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { type CustomJwtPayload } from "../types/jwt.types.js";

const authMiddleware: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
      });
      return;
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as CustomJwtPayload;

    req.user = decodedToken.user;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authMiddleware;