const { Router } = require("express");
const userRouter = require("./users.js");
const postsRouter = require("./posts.js");

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postsRouter);

module.exports = router;
