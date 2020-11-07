
const { EmptyResultError } = require('sequelize');
const {editAdressValidation} = require('../../validation/adress')

module.exports = async (_, args, context) => {
  await editAdressValidation.validateAsync(args, {abortEarly: false});
  try {
    const adress = await context.models.Adress.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return adress[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Adress not found!");
  }
};