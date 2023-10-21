const express = require("express");
const usersRouter = express.Router();
const { UserService } = require("../../lib/users/");
const withResponse = require("../../middlewares/utils/withResponse");

// Home page route.

usersRouter.get("/", UserService.getAll);

usersRouter.post("/signup", UserService.signUp);

usersRouter.post("/signin", UserService.logIn);

usersRouter.get("/find", UserService.getUser);

module.exports = usersRouter;
