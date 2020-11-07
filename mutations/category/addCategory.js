const {
  addCategoryValidation
} = require('../../validation/category')

module.exports = async (_, args, context) => {
  await addCategoryValidation.validateAsync(args, {
    abortEarly: false
  });
  const category = await context.models.Category.create({
    ...args,
  });
  return category;
};