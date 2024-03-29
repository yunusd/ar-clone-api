'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      State.belongsTo(models.Country, {
        foreignKey: "countryId",
        allowNull: false
      });
      State.hasMany(models.City, {
        foreignKey: 'stateId',
        as: "cities"
      });
      State.hasMany(models.Language, {
        foreignKey: 'stateId',
        as: "languages"
      });
    }
  };
  State.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'State',
  });
  return State;
};