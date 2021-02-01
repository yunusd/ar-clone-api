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
      Language.belongsTo(models.Country, {
        foreignKey: "countryId",
        allowNull: true,
        as: 'country'
      });
      Language.belongsTo(models.Faq, {
        foreignKey: "faqId",
        allowNull: true,
        as: 'faq'
      });
      Language.belongsTo(models.Question, {
        foreignKey: "questionId",
        allowNull: true,
        as: 'question'
      });
      Language.belongsTo(models.QuestionOption, {
        foreignKey: "questionOptionId",
        allowNull: true,
        as: 'questionOption'
      });
      Language.belongsTo(models.RequiredDocument, {
        foreignKey: "requiredDocumentId",
        allowNull: true,
        as: 'requiredDocument'
      });
      Language.belongsTo(models.State, {
        foreignKey: "stateId",
        allowNull: true,
        as: 'state'
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