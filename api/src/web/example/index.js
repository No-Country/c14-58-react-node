var express = require("express");
var exampleRouter = express.Router();
var exampleService = require("../../lib/examples/examples.service");

// Home page route.
exampleRouter.get("/pepe", async (req, res) => {
  res.send(await exampleService.create(req, res));
});

module.exports = exampleRouter;
