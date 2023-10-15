var express = require("express");
var usersRouter = express.Router();
var { UserService } = require("../../lib/users/");
// Home page route.

usersRouter.get("/", async (req, res) => {
  res.send(await UserService.getAll(req, res));
});

module.exports = usersRouter;
