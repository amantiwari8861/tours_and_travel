import type { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  user: {
    _id: string;
    email: string;
    role: string;
  };
}