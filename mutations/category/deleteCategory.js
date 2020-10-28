
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const category = await context.models.Category.findByPk(args.id);

    const deletedCategory = await context.models.Category.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedCategory ? category : new EmptyResultError("Category not found!");;
  } catch (error) {
    throw new Error(error);
  }
};