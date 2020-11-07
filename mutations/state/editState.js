const { EmptyResultError } = require('sequelize');
const {editStateValidation} = require('../../validation/state')

module.exports = async (_, args, context) => {
  await editStateValidation.validateAsync(args, {abortEarly: false});

  try {
    const state = await context.models.State.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return state[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("State not found!");
  }
};