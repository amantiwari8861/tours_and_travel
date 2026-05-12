import type { Request, Response } from "express";

const addUser = async (req: Request, res: Response) => {
    const userObj = req.body;
    res.send("adding user with details:" + JSON.stringify(userObj));
}
const getAllUser = async (req: Request, res: Response) => {
    res.send("sending all user details");
}
const updateUser = async (req: Request, res: Response) => {
    const userObj = req.body;
    const userId = req.params.userId;
    res.send("updating user having id " + userId + " with details: " + JSON.stringify(userObj));
}
const deleteUser = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.send("deleting user having id " + userId);
}
const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.send("giving user details having id " + userId);
}
const getUserByEmail = async (req: Request, res: Response) => {
    const email = req.params.email;
    res.send("giving user details having email id " + email);
}
export { addUser, getAllUser, updateUser, deleteUser, getUserById, getUserByEmail };


