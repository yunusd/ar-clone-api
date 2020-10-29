const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
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