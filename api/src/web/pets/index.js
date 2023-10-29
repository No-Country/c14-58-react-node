const express = require("express");
const petsRouter = express.Router();
const { PetService } = require("../../lib/pets/");

petsRouter.get("/", PetService.getAllPets);

petsRouter.post("/", PetService.createPet);

petsRouter.patch("/", PetService.editPet)

module.exports = petsRouter;
