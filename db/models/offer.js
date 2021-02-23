"use strict";

const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      Offer.belongsTo(models.User, {
          foreignKey: "userId",
          allowNull: false,
          as: 'user'
        }),
        Offer.hasMany(models.Offer_Content, {
          foreignKey: "offerId",
          as: "contents"
        }),
        Offer.belongsTo(models.Service, {
          foreignKey: "serviceId",
          allowNull: false,
          as: 'services'
        });
    }
  }

  Offer.init({
    price: DataTypes.FLOAT,
    isWinnerOffer : DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Offer",
  });
  return Offer;
};