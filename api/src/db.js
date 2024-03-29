// Sequelize instances

const { Sequelize } = require("sequelize");

const db = {};

// const sequelize = new Sequelize({
//   host: process.env.DATABASE_HOST,
//   dialect: process.env.DIALECT,
//   port: process.env.DATABASE_PORT,
//   password: process.env.DATABASE_PASSWORD,
//   username: process.env.DATABASE_USERNAME,
//   database: process.env.DATABASE_NAME,
//   define: { timestamps: false },
// });
const sequelize = new Sequelize(process.env.MYSQL_URL);
const User = require("./lib/users/users.model")(sequelize, Sequelize.DataTypes);
const Pets = require("./lib/pets/pets.model")(sequelize, Sequelize.DataTypes);

db.User = User;
db.Pets = Pets;

// Relations
User.hasMany(Pets);
Pets.belongsTo(User);

const dbInit = async () => {
  await User.sync({ alter: true });
  await Pets.sync({ alter: true });
};

module.exports = {
  dbInit,
  sequelize,
  Sequelize,
  User,
  Pets,
};
