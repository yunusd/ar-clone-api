const {
  addAddressValidation
} = require('../../validation/address')

module.exports = async (_, args, context) => {
  await addAddressValidation.validateAsync(args, {
    abortEarly: false
  });
  const adress = await context.models.Address.create({
    ...args,
  });
  return address;
};