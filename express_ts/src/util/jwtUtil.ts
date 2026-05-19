import jwt from "jsonwebtoken";

const JWT_SECRET=process.env.JWT_SECRET
const createJWT = async (user: any) => {
    if(!JWT_SECRET){
        throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({
        userId: user._id,
        role: user.role,
        isActive: user.isActive,
    }, JWT_SECRET, {
        expiresIn: "15m",
    });
    return token;
}
const verifyJWT = async (token: string) => {
    const decodedToken = jwt.verify(token,JWT_SECRET as string);
    return decodedToken;
}
const decodeJWT = async (token: string) => {
    const decodedToken = jwt.decode(token);
    return decodedToken;
}
const checkAuthHeader = async (req: any,res: any,next: any) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decodedToken = verifyJWT(token);
    if (!decodedToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decodedToken;
    next();
}
export { createJWT, verifyJWT,decodeJWT,checkAuthHeader };