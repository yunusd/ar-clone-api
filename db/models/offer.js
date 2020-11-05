"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      Offer.belongsTo(models.User, { foreignKey: "userId",allowNull:false }),
        Offer.belongsTo(models.Service, {
          foreignKey: "serviceId",
          allowNull:false,
        });
    }
  }

  Offer.init(
    {
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Offer",
    }
  );
  return Offer;
};
