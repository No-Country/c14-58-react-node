const express = require("express");
const petsRouter = express.Router();
const { PetService } = require("../../lib/pets/");

petsRouter.get("/", PetService.getAllPets);

petsRouter.post("/", PetService.createPet);

petsRouter.patch("/", PetService.editPet);

petsRouter.post("/prompt", PetService.prompter);

module.exports = petsRouter;
