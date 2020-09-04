"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.Catalog, { foreignKey: "catalogId" }),
        Category.hasMany(models.Service);
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      minPrice: DataTypes.FLOAT,
      maxPrice: DataTypes.FLOAT,
      isPriceRange: DataTypes.BOOLEAN,
      price: DataTypes.FLOAT,
      catalogId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'catalogs', // 'persons' refers to table name
          key: 'id', // 'id' refers to column name in persons table
       }
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
