const { Pets, User } = require("../../db");
const { BadRequest } = require("../../errorClasses");
const { petSchema } = require("./pets.validations");
const jwt = require("jsonwebtoken");
const { cloudinary } = require("../../helpers/cloudinaryConfig");
const axios = require("axios");

class PetService {
  static async getAllPets(req, res, next) {
    try {
      const all_pets = await Pets.findAll({
        include: [
          {
            model: User,
            attributes: ["id", "first_name", "surname", "email", "tel"],
          },
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

      // Upload image
      const uploadResponse = await cloudinary.uploader.upload(req.body.image, {
        resource_type: "auto",
        folder: "mascotopia",
      });

      // Set image URL
      value.image = uploadResponse.secure_url;

      const pet = await Pets.create({ ...value });

      pet.setUser(decodedToken.userId);

      return res.json(pet);
    } catch (err) {
      next(err);
    }
  }

  static async editPet(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET);

      const pet = await Pets.findByPk(req.body.id);

      if (!pet) {
        throw new BadRequest("Pet not found");
      }

      if (pet.dataValues.UserId !== decodedToken.userId) {
        throw new BadRequest("You are not allowed to edit this pet");
      }

      Object.assign(pet, req.body.pet);
      await pet.save();

      return res.json(pet);
    } catch (err) {
      next(err);
    }
  }

  static async prompter(req, res, next) {
    const { prompt } = req.body;

    try {
      const response = await axios(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-0301",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.AI_KEY}`,
          },
        }
      );

      console.log(response.data);

      res.json({
        msg: "ok",
        response: "response",
      });
    } catch (error) {}
  }
}

module.exports = PetService;
