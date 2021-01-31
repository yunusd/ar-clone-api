"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    static associate(models) {
      Catalog.hasMany(models.Category, {foreignKey:'catalogId', as: "categories" });
      Catalog.hasMany(models.Language, {foreignKey:'catalogId', as: "languages" });
    }
  }

  Catalog.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      posterPath: DataTypes.STRING,
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
