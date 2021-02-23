const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

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