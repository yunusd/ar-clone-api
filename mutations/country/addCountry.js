const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

    let country = await context.models.Country.create({
      ...args,
    });

    country = JSON.parse(JSON.stringify(country, null, 4));

    await createLanguage({
      model: country,
      countryId: country.id
    });

    return country;
  };