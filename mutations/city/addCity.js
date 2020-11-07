const {
  addCityValidation
} = require('../../validation/city')

module.exports = async (_, args, context) => {
  await addCityValidation.validateAsync(args, {
    abortEarly: false
  });
  const city = await context.models.City.create({
    ...args,
  });
  return city;
};