"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.Catalog, {
        foreignKey: "CatalogId",
      }),
        Category.hasMany(models.Service, { as: "services" });
      Category.hasMany(models.Question, { as: "questions" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      minPrice: DataTypes.FLOAT,
      maxPrice: DataTypes.FLOAT,
      isPriceRange: DataTypes.BOOLEAN,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Category",
    },
    { freezeTableName: true }
  );
  return Category;
};
