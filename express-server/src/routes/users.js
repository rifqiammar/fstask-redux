const { Router } = require("express");
const { getUsers, createUser, getUserPosts, getUserById, deleteUser } = require("../controllers/userController.js");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/add", createUser);
userRouter.delete("/:id", deleteUser);

// Join
userRouter.get("/userposts", getUserPosts);
userRouter.get("/user/:id", getUserById);

module.exports = userRouter;
