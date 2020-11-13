const {editServiceValidation} = require('../../validation/service')
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  await editServiceValidation.validateAsync(args, {abortEarly: false});
  try {
    const service = await context.models.Service.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return service[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Service not found!");
  }
};