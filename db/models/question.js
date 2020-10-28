"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Question.hasMany(models.QuestionOption);
      Question.belongsTo(models.Category, {
        foreignKey: "CategoryId",
        as: "categoryId",
      });
    }
  }
  Question.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.ENUM("trueFalse", "singleChoice"),
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Question",
    }
  );
  return Question;
};
