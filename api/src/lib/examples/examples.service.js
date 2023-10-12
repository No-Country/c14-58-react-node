const { Example } = require("../../db");
const validations = require("./examples.validations");

class ExampleService {
  static async create(req, res, next) {
    try {
      // call db methods after validations have passed
      return "hola mundo";
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ExampleService;
