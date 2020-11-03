const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const user_category = await context.models.User_Category.findByPk(args.id);

    const deletedUser_category = await context.models.User_Category.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedUser_category ? user_category : new EmptyResultError("User_Category not found!");;
  } catch (error) {
    throw new Error(error);
  }
};