const deleteLang = require('../../helpers/deleteLanguageObject');

const {
  EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    let catalog = await context.models.Catalog.findByPk(args.id);
    catalog = JSON.parse(JSON.stringify(catalog, null, 4));

    const deletedCatalog = await context.models.Catalog.destroy({
      where: {
        id: args.id,
      }
    });

    await deleteLang({
      model: catalog,
      catalogId: catalog.id
    })

    return deletedCatalog ? catalog : new EmptyResultError("Catalog not found!");;
  } catch (error) {
    throw new Error(error);
  }
};