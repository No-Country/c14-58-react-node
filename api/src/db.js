// Sequelize instances

const { Sequelize } = require("sequelize");

const db = {};

const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  dialect: process.env.DIALECT,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  database: `${process.env.DATABASE_NAME}_${process.env.NODE_ENV}`,
  define: { timestamps: false },
  logging: !(
    process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production"
  ),
});

const Example = require("./lib/examples/examples.model")(
  sequelize,
  Sequelize.DataTypes
);

db.Example = Example;

const models = [Example];

models.forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

const dbInit = () => Promise.all([Example.sync({ alter: true })]);

module.exports = {
  dbInit,
  sequelize,
  Sequelize,
};
