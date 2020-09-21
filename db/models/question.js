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
      Question.belongsTo(models.Category, { foreignKey: "categoryId" });

    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      description: DataTypes.STRING,
      questionType: DataTypes.ENUM({
        values: ["trueFalse", "singleChoice"],
      }),
      categoryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
