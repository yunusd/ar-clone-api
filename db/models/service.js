"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {
        as: "categoryId",
        foreignKey: "CategoryId",
      }),
        Service.belongsTo(models.User, { foreignKey: "UserId", as: "userId" }),
        Service.hasMany(models.Offer);
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      posterPath: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
