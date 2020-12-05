'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceContent extends Model {

    static associate(models) {
      ServiceContent.belongsTo(models.Service, { foreignKey: "serviceId" , allowNull:true, as:'service' })
      ServiceContent.belongsTo(models.Question, { foreignKey: "questionId" , allowNull:true, as:'question' })
      ServiceContent.belongsTo(models.QuestionOption, { foreignKey: "questionOptionId" , allowNull:true, as:'questionOption' })
    }
  };
  ServiceContent.init({
    photoUrl: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'ServiceContent',
  });
  return ServiceContent;
};