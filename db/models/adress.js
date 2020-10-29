'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {

    static associate(models) {
      Adress.belongsTo(models.City,{ as : 'city'});
      Adress.belongsTo(models.State,{ as : 'state'});
      Adress.belongsTo(models.Country,{ as : 'country'});
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