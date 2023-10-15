const { User, Pets } = require("../../db");
const { userSchema } = require("./users.validations");

class UserService {
  static async getAll(req, res, next) {
    const { first_name, surname, password, email } = req.body;
    await userSchema.validateAsync({ first_name, surname, password, email });

    try {
      const users = await User.findAll({
        include: Pets,
      });
      return users;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = UserService;
