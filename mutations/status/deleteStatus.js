const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const status = await context.models.Status.findByPk(args.id);

    const deletedStatus= await context.models.Status.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedStatus ? status : new EmptyResultError("Status not found!");;
  } catch (error) {
    throw new Error(error);
  }
};