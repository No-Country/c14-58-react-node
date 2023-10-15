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
        type: DataTypes.DATE,
        allowNull: false,
      },
      images: {
        type: DataTypes.TEXT,
        allowNull: false,
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
