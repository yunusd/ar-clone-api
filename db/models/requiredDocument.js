'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequiredDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RequiredDocument.belongsTo(models.Category, {
        foreignKey: "categoryId",
        allowNull: false,
        as: 'category'
      });
      RequiredDocument.hasMany(models.Language, {
        foreignKey: 'requiredDocumentId',
        as: "languages"
      });
    }
  };
  RequiredDocument.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'RequiredDocument',
  });
  return RequiredDocument;
};