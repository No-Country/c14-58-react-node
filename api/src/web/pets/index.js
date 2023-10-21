const express = require("express");
const petsRouter = express.Router();
const { PetService } = require("../../lib/pets/");
const withResponse = require("../../middlewares/utils/withResponse");

petsRouter.get("/", async (req, res, next) => {
  withResponse({ req, res, next }, PetService.getAllPets);
});

petsRouter.post("/", async (req, res, next) => {
  withResponse({ req, res, next }, PetService.createPet);
});

module.exports = petsRouter;
