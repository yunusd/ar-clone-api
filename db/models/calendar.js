'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendar extends Model {

    static associate(models) {
      Calendar.belongsTo(models.RuleContent, {
        foreignKey: "ruleContentId",
        allowNull: true,
        as: 'ruleContent'
      })
    }
  };
  Calendar.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    dayOfWeek: DataTypes.INTEGER,
    startHour: DataTypes.INTEGER,
    endHour: DataTypes.INTEGER,
    startMinute: DataTypes.INTEGER,
    endMinute: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Calendar',
  });
  return Calendar;
};