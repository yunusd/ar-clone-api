const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const country = await context.models.Country.findByPk(args.id);

    const deletedCountry = await context.models.Country.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedCountry ? country : new EmptyResultError("Country not found!");;
  } catch (error) {
    throw new Error(error);
  }
};