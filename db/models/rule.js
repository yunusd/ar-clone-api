'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rule.hasMany(models.RuleContent, {foreignKey:'ruleId',
        as: 'contents'
      });
      Rule.belongsTo(models.User_Category, {foreignKey: 'categoryId',allowNull:false, as : 'user_category'})

    }
  };
  Rule.init({
    name: DataTypes.STRING,
    makeOfferprice: DataTypes.INTEGER,
    minServicePrice: DataTypes.INTEGER,
    maxServicePrice: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Rule',
  });
  return Rule;
};