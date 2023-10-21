const { Router } = require("express");
const { getPosts, createPost, getPostById, deletePost } = require("../controllers/postsController.js");

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/add", createPost);
postRouter.get("/:id", getPostById);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
