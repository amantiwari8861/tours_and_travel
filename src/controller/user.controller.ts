import type { RequestHandler } from "express";

const addUser: RequestHandler = async (req, res) => {
    const userObj = req.body;
    res.send("adding user with details:" + JSON.stringify(userObj));
}

const getAllUser: RequestHandler = async (req, res) => {
    res.send("sending all user details");
}

const updateUser: RequestHandler<{ userId: string }> = async (req, res) => {
    const userObj = req.body;
    const userId = req.params.userId;
    res.send("updating user having id " + userId + " with details: " + JSON.stringify(userObj));
}

const deleteUser: RequestHandler<{ userId: string }> = async (req, res) => {
    const userId = req.params.userId;
    res.send("deleting user having id " + userId);
}

const getUserById: RequestHandler<{ userId: string }> = async (req, res) => {
    const userId = req.params.userId;
    res.send("giving user details having id " + userId);
}

const getUserByEmail: RequestHandler<{ email: string }> = async (req, res) => {
    const email = req.params.email;
    res.send("giving user details having email id " + email);
}

export { addUser, getAllUser, updateUser, deleteUser, getUserById, getUserByEmail };


