const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const city = await context.models.City.findByPk(args.id);

    const deletedCity = await context.models.City.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedCity ? city : new EmptyResultError("City not found!");;
  } catch (error) {
    throw new Error(error);
  }
};