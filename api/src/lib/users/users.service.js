const { User, Pets } = require("../../db");
const { userSchema } = require("./users.validations");

class UserService {
  static async getAll(req, res, next) {
    try {
      const users = await User.findAll({
        include: Pets,
      });
      return users;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserService;
