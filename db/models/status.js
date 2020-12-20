'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {

    static associate(models) {
      Status.hasMany(models.User, {foreignKey:'statusId' , as: "users" })


    }
  };
  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Status',
  });
  return Status;
};