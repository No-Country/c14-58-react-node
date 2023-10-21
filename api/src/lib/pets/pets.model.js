const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {}

  Pets.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      post_date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date().toISOString().split("T")[0],
      },
      image: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://maikaipets.com/wp-content/uploads/MAIKAI-HOME-DEF.jpg",
      },
      status: {
        type: DataTypes.ENUM("lost", "found"),
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      // Other model options go here
      modelName: "Pets",
      sequelize,
    }
  );

  return Pets;
};
