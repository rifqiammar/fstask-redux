const { Router } = require("express");
const { login } = require("../controllers/login.js");

const loginRouter = Router();

loginRouter.get("/", login);

module.exports = loginRouter;
