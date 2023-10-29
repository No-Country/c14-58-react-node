const Joi = require("joi");

const petSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid("lost", "found").required(),
  image: Joi.string().required(),
});

module.exports = { petSchema };
