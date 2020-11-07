const {addCountryValidation} = require('../../validation/country')

module.exports = async (_, args, context) => {
  await addCountryValidation.validateAsync(args, {
    abortEarly: false
  });
    const country = await context.models.Country.create({
      ...args,
    });
    return country;
  };