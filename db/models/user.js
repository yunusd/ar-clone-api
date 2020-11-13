"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Service ,{foreignKey:'userId', as: 'services'});
      User.hasMany(models.Offer,{foreignKey:'userId', as: 'offers'});
      User.hasMany(models.User_Category,{foreignKey:'userId', as: 'userServiceCategories'});
      User.hasMany(models.User_Role,{foreignKey:'userId', as: 'roles'});
      User.belongsTo(models.Address,{ foreignKey:'addressId', allowNull: true, as:'address'});
      User.belongsTo(models.Catalog,{foreignKey:'catalogId', allowNull: true, as:'userServiceCatalog'});
      User.belongsTo(models.Status, { foreignKey: "statusId",allowNull:false,as :'status'});

    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      userName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      type: DataTypes.ENUM('admin', 'serviceProvider','receivingService'),
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "User",
    }
  );
  return User;
};
