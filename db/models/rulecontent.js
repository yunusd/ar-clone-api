'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RuleContent extends Model {

    static associate(models) {
      RuleContent.belongsTo(models.Rule, {
        foreignKey: "ruleId",
        allowNull: true,
        as: 'rule'
      });
      RuleContent.belongsTo(models.Question, {
        foreignKey: "questionId",
        allowNull: true,
        as: 'question'
      });
      RuleContent.belongsTo(models.QuestionOption, {
        foreignKey: "questionOptionId",
        allowNull: true,
        as: 'questionOption'
      });
      RuleContent.belongsTo(models.Address, {
        foreignKey: "addressId",
        allowNull: true,
        as: 'address'
      });
      RuleContent.hasMany(models.Calendar,{foreignKey: 'ruleContentId', as:'calendars'});
    }
  };
  RuleContent.init({}, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'RuleContent',
  });
  return RuleContent;
};