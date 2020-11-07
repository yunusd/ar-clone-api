'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Role.belongsTo(models.Role, { foreignKey: "roleId",allowNull:false,as :'role'});
      User_Role.belongsTo(models.User, { foreignKey: "userId",allowNull:false,as :'user'});
    }
  };
  User_Role.init({

  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User_Role',
  });
  return User_Role;
};