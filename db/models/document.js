'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    
    static associate(models) {
      Document.belongsTo(models.User_Category, {
        foreignKey: 'user_categoryId',
        allowNull: false,
        as: "user_category"
      })
    }
  };
  Document.init({
    url: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Document',
  });
  return Document;
};