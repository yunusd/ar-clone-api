"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {        
        foreignKey: "categoryId",
        allowNull : false
      }),
        Service.belongsTo(models.Adress,{foreignKey:'serviceId', as : 'adress'});
        Service.belongsTo(models.User, { foreignKey: "userId" , allowNull:false, as:'user' }),
        Service.hasMany(models.Offer,{foreignKey: 'serviceId', as:'offers'});
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
