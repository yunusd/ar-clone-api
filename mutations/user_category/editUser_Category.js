const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const user_category = await context.models.User_Category.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return user_category[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("User_Category not found!");
  }
};