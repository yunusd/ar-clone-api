const { EmptyResultError } = require('sequelize');
const {editCityValidation} = require('../../validation/city')

module.exports = async (_, args, context) => {
  await editCityValidation.validateAsync(args, {abortEarly: false});

  try {
    const city = await context.models.City.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return city[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("City not found!");
  }
};