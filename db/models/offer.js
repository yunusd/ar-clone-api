"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      Offer.belongsTo(models.User, { foreignKey: "UserId", as: "userId" }),
        Offer.belongsTo(models.Service, {
          foreignKey: "ServiceId",
          as: "serviceId",
        });
    }
  }

  Offer.init(
    {
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Offer",
    }
  );
  return Offer;
};
