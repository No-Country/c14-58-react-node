const { User, Pets } = require("../../db");
const { BadRequest, NotFound } = require("../../errorClasses");
const { userSchema } = require("./users.validations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  static async getAll(req, res, next) {
    try {
      const users = await User.findAll({
        include: Pets,
      });
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }
  static async signUp(req, res, next) {
    try {
      const { error, value } = userSchema.validate(req.body);
      if (error) {
        throw new BadRequest("Missing parameters");
      }

      const { first_name, surname, email, password } = value;
      const hashedPassword = await bcrypt.hash(password, 10);

      // Primero, define las condiciones de búsqueda
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          first_name,
          surname,
          email,
          password: hashedPassword,
          role: "client",
        },
      });

      if (!created) {
        throw new BadRequest("User already exists, please sign in");
      }
      const token = jwt.sign(
        {
          userId: user.id,
          role: user.role,
        },
        process.env.SECRET,
        {
          expiresIn: "3h",
        }
      );

      return res.json({
        name: user.first_name,
        surname: user.surname,
        email: user.email,
        token,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async getUser(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1]; // "Authorization" como "Bearer <token>"
      const decodedToken = jwt.verify(token, process.env.SECRET);

      const userId = decodedToken.userId;

      // Busca el usuario por ID en la base de datos
      const user = await User.findByPk(userId, { include: Pets });

      if (!user) {
        throw new NotFound("User not found");
      }
      return res.json({
        name: user.first_name,
        surname: user.surname,
        email: user.email,
        Pets: user.Pets,
      });
    } catch (err) {
      return next(err);
    }
  }

  static async logIn(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw new Error("User not found"); // Usuario no encontrado
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Invalid credentials");
      }

      const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
        expiresIn: "3h",
      });

      res.status(202).json({
        name: user.first_name,
        surname: user.surname,
        email: user.email,
        token,
      });
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UserService;
