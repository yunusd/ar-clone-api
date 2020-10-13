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
      Question.hasMany(models.questionOption);
      Question.belongsTo(models.Category, {
        foreignKey: "CategoryId",
        as: "categoryId",
      });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      description: DataTypes.STRING,
      questionType: DataTypes.ENUM({
        values: ["trueFalse", "singleChoice"],
      }),
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
