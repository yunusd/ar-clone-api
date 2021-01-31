'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {

    static associate(models) {
      Language.belongsTo(models.Catalog, {
        foreignKey: "catalogId",
        allowNull: true,
        as: 'catalog'
      });
      Language.belongsTo(models.Category, {
        foreignKey: "categoryId",
        allowNull: true,
        as: 'category'
      });
      Language.belongsTo(models.City, {
        foreignKey: "cityId",
        allowNull: true,
        as: 'city'
      });
    }
  };
  Language.init({
    word: DataTypes.STRING,
    tr: DataTypes.STRING,
    kz: DataTypes.STRING,
    ru: DataTypes.STRING,
    type: DataTypes.ENUM("name", "description", "question", "answer", "text"),
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Language',
  });
  return Language;
};