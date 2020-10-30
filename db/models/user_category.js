'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Category.belongsTo(models.User, { as : 'user'}),
      User_Category.belongsTo(models.Category, {as : 'category'})
    }
  };
  User_Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User_Category',
  });
  return User_Category;
};