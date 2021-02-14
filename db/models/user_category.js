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
      User_Category.belongsTo(models.User, {foreignKey:'userId',allowNull:false, as : 'user'}),
      User_Category.belongsTo(models.Category, {foreignKey: 'categoryId',allowNull:false, as : 'category'})
      User_Category.hasMany(models.Document, {foreignKey: 'user_categoryId',allowNull:false, as : 'documents'})
      User_Category.hasMany(models.Rule, {foreignKey: 'user_categoryId',allowNull:false, as : 'rules'})
    }
  };
  User_Category.init({
    status: DataTypes.ENUM("approved","verifying","denied"),
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User_Category',
  });
  return User_Category;
};