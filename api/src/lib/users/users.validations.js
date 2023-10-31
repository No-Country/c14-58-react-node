const Joi = require("joi");

const userSchema = Joi.object({
  first_name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  tel: Joi.string().required(),
});

module.exports = { userSchema };
