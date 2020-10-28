
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const catalog = await context.models.Catalog.findByPk(args.id);

    const deletedCatalog = await context.models.Catalog.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedCatalog ? catalog : new EmptyResultError("Catalog not found!");;
  } catch (error) {
    throw new Error(error);
  }
};