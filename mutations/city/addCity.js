
const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

  let city = await context.models.City.create({
    ...args,
  });
  city = JSON.parse(JSON.stringify(city, null, 4));

  await createLanguage({
    model: city,
    cityId: city.id
  });

  return city;
};