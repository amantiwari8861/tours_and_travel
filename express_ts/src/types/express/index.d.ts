import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}

export {};
interface AuthUser {
  _id: string;
  email: string;
  role: string;
}

