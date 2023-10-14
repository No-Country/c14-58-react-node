const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {}

  Pet.init(
  {
    // Model attributes are defined here
  },
  {
    // Other model options go here
    modelName: 'Pet',
    sequelize,
  },
);

  return Pet
}
