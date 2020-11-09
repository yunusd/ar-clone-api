
const { EmptyResultError } = require('sequelize');
const {editAddressValidation} = require('../../validation/address')

module.exports = async (_, args, context) => {
  await editAddressValidation.validateAsync(args, {abortEarly: false});
  try {
    const address = await context.models.Address.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return address[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Address not found!");
  }
};