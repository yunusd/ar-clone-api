"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
 
    static associate(models) {
      Catalog.hasMany(models.Category);
    }
  }

  Catalog.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Catalog",
    }
  );
  return Catalog;
};
