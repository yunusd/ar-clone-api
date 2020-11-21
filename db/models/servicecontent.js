'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceContent extends Model {

    static associate(models) {
      ServiceContent.belongsTo(models.Service, { foreignKey: "serviceId" , allowNull:false, as:'service' })
      ServiceContent.belongsTo(models.Question, { foreignKey: "questionId" , allowNull:false, as:'question' })
      ServiceContent.belongsTo(models.QuestionOption, { foreignKey: "questionOptionId" , allowNull:false, as:'questionOption' })
    }
  };
  ServiceContent.init({
    questionId: DataTypes.INTEGER,
    questionOptionId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'ServiceContent',
  });
  return ServiceContent;
};