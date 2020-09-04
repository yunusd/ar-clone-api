"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      Offer.belongsTo(models.User, { foreignKey: "userId" }),
      Offer.belongsTo(models.Service, { foreignKey: "serviceId" });
    }
  }

  Offer.init(
    {
      price: DataTypes.FLOAT,
      serviceId: {
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
      modelName: "Offer",
    }
  );
  return Offer;
};
