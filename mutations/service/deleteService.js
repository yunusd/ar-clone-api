
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const service = await context.models.Service.findByPk(args.id);

    const deletedService = await context.models.Service.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedService ? service : new EmptyResultError("Service not found!");;
  } catch (error) {
    throw new Error(error);
  }
};