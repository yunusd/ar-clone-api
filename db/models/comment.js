'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: "userId",allowNull:false,as :'user'});
      Comment.belongsTo(models.User, { foreignKey: "commentOwnerId",allowNull:false,as :'commentOwner'});
      Comment.belongsTo(models.Service, { foreignKey: "serviceId",allowNull:false,as :'service'});
    }
  };
  Comment.init({
    content: DataTypes.STRING,
    point: DataTypes.FLOAT,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Comment',
  });
  return Comment;
};