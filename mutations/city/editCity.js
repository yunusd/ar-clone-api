const { EmptyResultError } = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {

  try {
    let city = await context.models.City.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    city = JSON.parse(JSON.stringify(city[1], null, 4));

    await editLanguage({
      model: city,
      cityId : city.id,
    });

    return city;
  } catch (error) {
    throw new EmptyResultError("City not found!");
  }
};