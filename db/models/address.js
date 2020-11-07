'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      Address.belongsTo(models.City,{ as : 'city'});
      Address.belongsTo(models.State,{ as : 'state'});
      Address.belongsTo(models.Country,{ as : 'country'});
    }
  };
  Address.init({
    street: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    deliveryPhoneNumber: DataTypes.STRING,
    addressDirections: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Address',
  });
  return Address;
};