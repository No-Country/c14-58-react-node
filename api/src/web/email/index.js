const express = require("express");
const emailRouter = express.Router();
const { PetService } = require("../../lib/pets/");

emailRouter.post("/", PetService.getAllPets);


module.exports = emailRouter;
