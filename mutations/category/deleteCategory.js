const deleteLang = require('../../helpers/deleteLanguageObject');

const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    let category = await context.models.Category.findByPk(args.id);
    category = JSON.parse(JSON.stringify(category, null, 4));

    const deletedCategory = await context.models.Category.destroy({
      where: {
        id: args.id,
      }
    });

    await deleteLang({
      model: category,
      categoryId: category.id
    })

    return deletedCategory ? category : new EmptyResultError("Category not found!");;
  } catch (error) {
    throw new Error(error);
  }
};