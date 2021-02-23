const { EmptyResultError } = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {

  try {
    let country = await context.models.Country.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    country = JSON.parse(JSON.stringify(country[1], null, 4));

    await editLanguage({
      model: country,
      countryId : country.id,
    });

    return country;
  } catch (error) {
    throw new EmptyResultError("Country not found!");
  }
};