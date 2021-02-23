const { EmptyResultError } = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
  try {
    let country = await context.models.Country.findByPk(args.id);
    country = JSON.parse(JSON.stringify(country, null, 4));

    const deletedCountry = await context.models.Country.destroy({
      where: {
        id: args.id,
      }
    });
    await deleteLang({
      model: country,
      countryId: country.id
    })
    return deletedCountry ? country : new EmptyResultError("Country not found!");;
  } catch (error) {
    throw new Error(error);
  }
};