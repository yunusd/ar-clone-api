
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const role = await context.models.Role.findByPk(args.id);

    const deletedrole = await context.models.Role.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedrole ? role : new EmptyResultError("Role not found!");;
  } catch (error) {
    throw new Error(error);
  }
};