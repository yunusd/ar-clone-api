"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QuestionOption.belongsTo(models.Question, {
        foreignKey: "questionId",
        allowNull: false,
        as: 'question'
      });
      QuestionOption.hasMany(models.Language, {
        foreignKey: 'questionOptionId',
        as: "languages"
      });
    }
  }
  QuestionOption.init({
    text: DataTypes.STRING,
    minPrice: DataTypes.INTEGER,
    maxPrice: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "QuestionOption",
  });
  return QuestionOption;
};