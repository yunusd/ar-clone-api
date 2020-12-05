'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offer_Content extends Model {

    static associate(models) {
      Offer_Content.belongsTo(models.Offer, {
        foreignKey: "offerId",
        allowNull: false,
        as: 'offer'
      })
    }
  };
  Offer_Content.init({
    photoUrl: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Offer_Content',
  });
  return Offer_Content;
};