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
    static associate(models) 
    {
      State.belongsTo(models.Adress),
      State.belongsTo(models.Country, {
        foreignKey: "CountryId", as : 'countryId'
      }),
      State.hasMany(models.City, { as: "cities" })
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