"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {        
        foreignKey: "CategoryId",
        as : 'categoryId'
      }),
        Service.belongsTo(models.User, { foreignKey: "UserId" , as: 'userId' }),
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
      timestamps: true,
      paranoid: true,
      modelName: "Service",
    }
  );
  return Service;
};
