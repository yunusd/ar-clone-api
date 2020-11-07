const {
  addServiceValidation
} = require('../../validation/service')

module.exports = async (_, args, context) => {
  await addServiceValidation.validateAsync(args, {
    abortEarly: false
  });
  const service = await context.models.Service.create({
    ...args
  });
  return service;
};