"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {        
        foreignKey: "categoryId",
        allowNull : false
      }),
        Service.belongsTo(models.Address,{foreignKey:'addressId', as : 'address'});
        Service.belongsTo(models.User, { foreignKey: "userId" , allowNull:false, as:'user' }),
        Service.belongsTo(models.Calendar,{foreignKey: 'calendarId', as:'calendar'});
        Service.hasMany(models.Offer,{foreignKey: 'serviceId', as:'offers'});
        Service.hasMany(models.ServiceContent,{foreignKey: 'serviceId', as:'serviceContents'});
    }
  }
  Service.init(
    {
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
