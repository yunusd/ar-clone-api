const createLanguage = require('../../helpers/generateLanguageObject');

const {
  addCatalogValidation
} = require('../../validation/catalog')
module.exports = async (_, args, context) => {
  await addCatalogValidation.validateAsync(args, {
    abortEarly: false
  });
  let catalog = await context.models.Catalog.create({
    ...args,
  });

  catalog = JSON.parse(JSON.stringify(catalog, null, 4));

  await createLanguage({
    model: catalog,
    catalogId : catalog.id,
  });
  return catalog;
};