"use strict";

const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {
          foreignKey: "categoryId",
          allowNull: false
        }),
        Service.belongsTo(models.Address, {
          foreignKey: 'addressId',
          allowNull: true,
          as: 'address'
        });
      Service.belongsTo(models.User, {
          foreignKey: "userId",
          allowNull: false,
          as: 'user'
        }),
        Service.belongsTo(models.Calendar, {
          foreignKey: 'calendarId',
          allowNull: true,
          as: 'calendar'
        });
      Service.hasMany(models.Offer, {
        foreignKey: 'serviceId',
        as: 'offers'
      });
      Service.hasMany(models.ServiceContent, {
        foreignKey: 'serviceId',
        as: 'contents'
      });
    }
  }
  Service.init({
    description: DataTypes.STRING,
    posterPath: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Service",
  });
  return Service;
};