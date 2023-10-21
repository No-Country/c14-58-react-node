const express = require("express");
const usersRouter = express.Router();
const { UserService } = require("../../lib/users/");
const withResponse = require("../../middlewares/utils/withResponse");

// Home page route.

usersRouter.get("/", async (req, res, next) => {
  withResponse({ req, res, next }, UserService.getAll);
});

usersRouter.post("/signup", async (req, res, next) => {
  withResponse({ req, res, next }, UserService.signUp);
});

usersRouter.post("/signin", async (req, res, next) => {
  withResponse({ req, res, next }, UserService.logIn);
});

usersRouter.get("/find", async (req, res, next) => {
  withResponse({ req, res, next }, UserService.getUser);
});

module.exports = usersRouter;
