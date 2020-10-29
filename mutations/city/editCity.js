const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
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