'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {

    static associate(models) 
    {
      City.belongsTo(models.Country, {
        foreignKey: "countryId",allowNull: false
      }),
      City.belongsTo(models.State, {
        foreignKey: "stateId", allowNull:true
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