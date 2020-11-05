'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {

    static associate(models) {
      Country.hasMany(models.City, {foreignKey:'countryId', as: "cities" })
      Country.hasMany(models.State, {foreignKey:'countryId', as: "states" })
    }
  };
  Country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Country',
  });
  return Country;
};