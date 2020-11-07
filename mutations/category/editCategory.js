const {editCategoryValidation} = require('../../validation/category')

module.exports = async (_, args, context) => {
  await editCategoryValidation.validateAsync(args, {abortEarly: false});
  try {
    const category = await context.models.Category.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return category[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Category not found!");
  }
};