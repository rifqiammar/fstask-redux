const { Router } = require("express");
const userRouter = require("./users.js");
const postsRouter = require("./posts.js");
const loginRouter = require("./login.js");

const router = Router();

router.use("/login", loginRouter);
router.use("/users", userRouter);
router.use("/posts", postsRouter);

module.exports = router;
