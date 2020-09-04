"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      models.Service.belongsTo(models.Category, { foreignKey: "categoryId" }),
        models.Service.belongsTo(models.User, { foreignKey: "userId" }),
        models.Service.hasMany(models.Offer);
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      posterPath: DataTypes.STRING,
      price: DataTypes.FLOAT,
      categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
