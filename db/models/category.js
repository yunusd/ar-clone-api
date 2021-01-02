"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.Catalog, {
        foreignKey: "catalogId", allowNull: false
      }),
        Category.hasMany(models.Service, {foreignKey:'categoryId', as: "services" });
      Category.hasMany(models.Question, {foreignKey:'categoryId', as: "questions" });
      Category.hasMany(models.RequiredDocument, {foreignKey:'categoryId', as: "requiredDocuments" });
      Category.hasMany(models.Faq, {foreignKey:'categoryId', as: "faqs" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      posterPath: DataTypes.STRING,
      minPrice: DataTypes.FLOAT,
      maxPrice: DataTypes.FLOAT,
      isPriceRange: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Category",
    },
    { freezeTableName: true }
  );
  return Category;
};
