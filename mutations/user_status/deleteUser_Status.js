const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const user_status = await context.models.User_Status.findByPk(args.id);

    const deletedUser_Status= await context.models.User_Status.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedUser_Status ? user_status : new EmptyResultError("User_Status not found!");;
  } catch (error) {
    throw new Error(error);
  }
};