const { Pet } = require('./pets.model');
const PetSerializer = require('./pets.serializer');
const PetService = require('./pets.service');

module.exports = {
  Pet,
  PetSerializer,
  PetService,
};