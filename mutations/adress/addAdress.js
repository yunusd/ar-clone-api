const {
  addAddressValidation
} = require('../../validation/address')

module.exports = async (_, args, context) => {
  await addAddressValidation.validateAsync(args, {
    abortEarly: false
  });
  const adress = await context.models.Adress.create({
    ...args,
  });
  return adress;
};