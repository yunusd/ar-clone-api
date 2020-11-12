'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Status.belongsTo(models.Status, { foreignKey: "statusId",allowNull:false,as :'status'});
      User_Status.belongsTo(models.User, { foreignKey: "userId",allowNull:false,as :'user'});    }
  };
  User_Status.init({

  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User_Status',
  });
  return User_Status;
};