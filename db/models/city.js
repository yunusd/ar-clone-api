'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {

    static associate(models) 
    {
      City.belongsTo(models.Country, {
        foreignKey: "CountryId", as : 'countryId'
      }),
      City.belongsTo(models.State, {
        foreignKey: "StateId", as : 'stateId'
      })
    }
  };
  City.init({
    name: DataTypes.STRING
  }, 
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'City',
  });
  return City;
};