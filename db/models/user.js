"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Service ,{as: 'services'});
      User.hasMany(models.Offer,{as: 'offers'});
      User.belongsTo(models.Adress,{ as : 'adress'});
      User.belongsTo(models.Catalog,{as: 'userServiceCatalog'});
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
