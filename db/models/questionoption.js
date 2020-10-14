"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questionOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      questionOption.belongsTo(models.Question, { foreignKey: "QuestionId",as : 'questionId' });
    }
  }
  questionOption.init(
    {
      optionText: DataTypes.STRING,
      minPrice: DataTypes.FLOAT,
      maxPrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "questionOption",
    }
  );
  return questionOption;
};
