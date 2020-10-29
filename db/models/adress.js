'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {

    static associate(models) {
      Adress.hasOne(models.City, { as: "city" });
      Adress.hasOne(models.State, { as: "state" });
      Adress.hasOne(models.Country, { as: "country" });
    }
  };
  Adress.init({
    street: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    deliveryPhoneNumber: DataTypes.STRING,
    addressDirections: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Adress',
  });
  return Adress;
};