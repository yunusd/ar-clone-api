const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const country = await context.models.Country.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return country[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Country not found!");
  }
};