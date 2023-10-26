const { Pets, User } = require("../../db");
const { BadRequest } = require("../../errorClasses");
const { petSchema } = require("./pets.validations");
const jwt = require("jsonwebtoken");

class PetService {
  static async getAllPets(req, res, next) {
    try {
      const all_pets = await Pets.findAll({
        include: [
          { model: User, attributes: ["id", "first_name", "surname", "email"] },
        ],
      });
      return res.json(all_pets);
    } catch (err) {
      next(err);
    }
  }
  static async createPet(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1]; // "Bearer <token>"
      const decodedToken = jwt.verify(token, process.env.SECRET);

      const { error, value } = petSchema.validate(req.body);
      if (error) {
        throw new BadRequest(error.details[0].message);
      }
      const prevPets = await Pets.findAll({
        include: [
          { model: User, attributes: ["id", "first_name", "surname", "email"] },
        ],
      });
      const pet = await Pets.create({ ...value });

      pet.setUser(decodedToken.userId);

      return res.json([pet, ...prevPets]);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PetService;
