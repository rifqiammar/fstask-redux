const { Router } = require("express");
const { getPosts, createPost, getPostById, deletePost } = require("../controllers/postsController.js");
const { cekToken } = require("../controllers/login.js");

const postRouter = Router();

postRouter.get("/", cekToken, getPosts);
postRouter.post("/add", cekToken, createPost);
postRouter.get("/:id", cekToken, getPostById);
postRouter.delete("/:id", cekToken, deletePost);

module.exports = postRouter;
