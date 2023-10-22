const { Router } = require("express");
const { login } = require("../controllers/login.js");

const loginRouter = Router();

loginRouter.post("/", login);

module.exports = loginRouter;
