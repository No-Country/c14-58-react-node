const { Pet } = require('../../db');
const validations = require('./pets.validations');

class PetService {
  static async example(attributes) {
    console.log('example!');
    try {
      await validations.example.validateAsync(attributes);

      // call db methods after validations have passed
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = PetService ;