
const { EmptyResultError } = require('sequelize');
const {editCatalogValidation} = require('../../validation/catalog')

module.exports = async (_, args, context) => {
  await editCatalogValidation.validateAsync(args, {abortEarly: false});
  try {
    const catalog = await context.models.Catalog.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return catalog[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Catalog not found!");
  }
};