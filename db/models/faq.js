'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Faq.belongsTo(models.Category, {
        foreignKey: "CategoryId",
        as: "categoryId",
      });
    }
  };
  Faq.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Faq',
  });
  return Faq;
};