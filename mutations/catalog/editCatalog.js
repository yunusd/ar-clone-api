const editLanguage = require('../../helpers/editLanguageObject');
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    let catalog = await context.models.Catalog.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });

     catalog = JSON.parse(JSON.stringify(catalog[1], null, 4));

     await editLanguage({
      model: catalog,
      catalogId : catalog.id,
    });
    return catalog;
  } catch (error) {
    throw new EmptyResultError("Catalog not found!");
  }
};