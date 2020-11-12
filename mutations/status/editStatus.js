const { EmptyResultError } = require('sequelize');
const {editStatusValidation} = require('../../validation/status')
module.exports = async (_, args, context) => {
    await editStatusValidation.validateAsync(args, {abortEarly: false});

  try {
    const status = await context.models.Status.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return status[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Status not found!");
  }
};