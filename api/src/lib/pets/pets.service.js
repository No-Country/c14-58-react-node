const { Pets, User } = require("../../db");
const { BadRequest } = require("../../errorClasses");
const { petSchema } = require("./pets.validations");
const jwt = require("jsonwebtoken");
const { cloudinary } = require("../../helpers/cloudinaryConfig");
const axios = require("axios");
const vision = require("@google-cloud/vision");
const { CONFIG } = require("../../helpers/googleCloud");

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

      // start recon
      const client = new vision.ImageAnnotatorClient(CONFIG);

      const recon = await client.labelDetection(uploadResponse.secure_url);
      const labels = recon[0].labelAnnotations;
      console.log("HERE", labels[0].description);
      if (
        labels[0].description.toUpperCase() !== "CAT" ||
        labels[0].description.toUpperCase() !== "DOG"
      ) {
        return res.status(200).json({
          msg: "The image must be a cat or a dog",
          data: labels,
        });
      } else {
        // Set image URL
        value.image = uploadResponse.secure_url;

        const pet = await Pets.create({ ...value });

        pet.setUser(decodedToken.userId);

        return res.json(pet);
      }
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
      const response = await axios.post(
        process.env.AI_URL,
        {
          max_tokens: 512,
          mode: "python",
          model: process.env.AI_MODEL,
          n: 1,
          temperature: 0,
          text: `Answer this: ${prompt} `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TEXT_CORTEX_K}`,
          },
        }
      );

      res.json({
        msg: "ok",
        response: response.data.data.outputs[0].text,
      });
    } catch (error) {
      console.log("HHH Algo falló", error);
    }
  }

  static async test(req, res, next) {}
}

module.exports = PetService;
