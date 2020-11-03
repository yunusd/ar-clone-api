const {
  addCatalogValidation
} = require('../../validation/catalog')

module.exports = async (_, args, context) => {
  await addCatalogValidation.validateAsync(args, {
    abortEarly: false
  });
  const catalog = await context.models.Catalog.create({
    ...args,
  });
  return catalog;
};