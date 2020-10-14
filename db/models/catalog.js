"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    static associate(models) {
      Catalog.hasMany(models.Category, { as: "categories" });
    }
  }

  Catalog.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Catalog",
    }
  );
  return Catalog;
};
