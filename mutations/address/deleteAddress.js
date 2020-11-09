const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const address = await context.models.Address.findByPk(args.id);

    const deletedAddress = await context.models.Address.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedAddress ? address : new EmptyResultError("Address not found!");;
  } catch (error) {
    throw new Error(error);
  }
};