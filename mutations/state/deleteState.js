const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const state = await context.models.State.findByPk(args.id);

    const deletedState = await context.models.State.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedState ? state : new EmptyResultError("State not found!");;
  } catch (error) {
    throw new Error(error);
  }
};