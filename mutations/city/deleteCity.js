const { EmptyResultError } = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
  try {
    let city = await context.models.City.findByPk(args.id);
    city = JSON.parse(JSON.stringify(city, null, 4));

    const deletedCity = await context.models.City.destroy({
      where: {
        id: args.id,
      }
    });
    await deleteLang({
      model: city,
      cityId: city.id
    })
    return deletedCity ? city : new EmptyResultError("City not found!");;
  } catch (error) {
    throw new Error(error);
  }
};