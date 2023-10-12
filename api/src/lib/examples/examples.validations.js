const Joi = require("joi");

const exampleSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { exampleSchema };
