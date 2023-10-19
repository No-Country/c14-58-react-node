const express = require("express");
const usersRouter = express.Router();
const { UserService } = require("../../lib/users/");
const withResponse = require("../../middlewares/utils/withResponse");

// Home page route.

usersRouter.get("/", async (req, res, next) => {
  withResponse({ req, res, next }, UserService.getAll);
});

module.exports = usersRouter;
