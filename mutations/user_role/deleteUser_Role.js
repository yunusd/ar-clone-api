
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const user_role = await context.models.User_Role.findByPk(args.id);

    const deletedUser_Role = await context.models.User_Role.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedUser_Role ? user_role : new EmptyResultError("User_Role not found!");;
  } catch (error) {
    throw new Error(error);
  }
};